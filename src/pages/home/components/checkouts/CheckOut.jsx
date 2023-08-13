import React, { useContext, useEffect, useState } from 'react'
import "./CheckOut.scss"
import Qr from "../qrs/Qr";
import axios from 'axios';
import { RootContext } from '../../../../App';
import { message } from "antd"
export default function CheckOut() {
  const { cartStore, userStore } = useContext(RootContext);
  useEffect(() => {
    console.log("cartStore", cartStore)
  }, [cartStore])
  const [qrShow, setQrShow] = useState(false);
  const [qrData, setQrData] = useState(null);
  function saveReceipt(eventForm) {
    /* Reset Form Action */
    eventForm.preventDefault();

    /* Req.body.receiptInfor */
    let receiptInfor = {
      receipt_code: cartStore.data.id,
      total: cartStore?.data?.cart_details.reduce((result, nextItem) => {
        return (result += nextItem.quantity * nextItem.product.Price);
      }, 0),
      pay_mode: eventForm.target.payment.value,
      paid: eventForm.target.payment.value == "CASH" ? false : true,
      user_id: userStore.data.id
    };
    /* Req.body.receiptDetails */
    let receiptDetails = [];
    for (let i in cartStore.data.cart_details) {
      receiptDetails.push({
        product_id: cartStore.data.cart_details[i].product_id,
        quantity: cartStore.data.cart_details[i].quantity,
        note: cartStore.data.cart_details[i].note,
      });
    }

    /* Cash */
    axios
      .post("http://localhost:4000/apis/v1/purchase/order", {
        receiptInfor,
        receiptDetails,
      })
      .then((res) => {
        message.success("Thank You !");
        window.location.href = "/"
        // chuyển trang receipt
        console.log(" save receipt", res.data);
      })
      .catch((err) => {
        console.log("err", err)
        alert("bug ne");
      });
    return;
  }
  function checkOut(eventForm) {
    /* Zalo */
    if (eventForm.target.payment.value == "ZALO") {
      axios
        .post("http://localhost:4000/apis/v1/purchase/zalo-create", {
          receiptCode: cartStore.data.id,
          receiptTotal: cartStore?.data?.cart_details.reduce(
            (result, nextItem) => {
              return (result +=
                nextItem.quantity * nextItem.product.Price * 1000);
            },
            0
          ),
          userName:
            userStore.data.first_name + userStore.data.last_name,
        })
        .then((res) => {
          if (res.status == 200) {
            /* 
            - khi thành công sẽ nhận được QR code
            - orderId, url
            - Lặp vô tận trong 5 phút liên tục kiểm tra tiền đã vào túi chưa.
            - show QRCODE
            */
            setQrData({
              url: res.data.url,
              title: `Scan with ZaloPay`,
              orderId: res.data.orderId,
            });
            setQrShow(true);
            /* 
                Check kết quả giao dịch
            */
            let tradeInterval;
            let cancelTrade = setTimeout(() => {
              // sau 10' hủy giao dịch (600000)
              clearInterval(tradeInterval);
              setQrShow(false);
              setQrData(null);
              alert("Giao dịch đã bị hủy vì quá lâu!");
            }, 60000);
            tradeInterval = setInterval(() => {
              //console.log("đang kiểm tra thanh toán mỗi 5s");
              axios
                .get(
                  `http://localhost:4000/apis/v1/purchase/zalo-confirm/${res.data.orderId}`
                )
                .then((checkRes) => {
                  if (checkRes.status == 200) {
                    // chuyển qua trang hóa đơn
                    clearInterval(tradeInterval);
                    // thu hồi QR
                    setQrShow(false);
                    setQrData(null);
                    clearTimeout(cancelTrade);
                    // xử lý database
                    saveReceipt(eventForm);
                  }
                })
                .catch((err) => {
                  alert("zalo sập!");
                });
            }, 5000);
          }
        })
        .catch((err) => {
          console.log("err", err);
          alert("Tạm thời không thể thanh toán phương thức này!");
        });
      return;
    } else {
      saveReceipt(eventForm);
    }
  }
  const [confirmed, setConfirmed] = useState(false);

  const handleClick = () => {
    setConfirmed(true);
  };



  return (

    <div className='checkout_container'>
      <div className='checkout_form'>

        <div className='checkout_form_top'>
          <h5><i className="fa-solid fa-user"></i> PERSONAL INFORMATION</h5>
          {qrShow && qrData != null ? <Qr {...qrData} /> : <></>}
          <form >
            <label htmlFor="">Name</label>
            <input type="text" name='name' style={{ border: "2px solid black", borderRadius: "8px", color: "black", height: "23px", padding: "21px" }} />
           
            <label htmlFor="">Email</label>
            <input type="email" name='email' style={{ border: "2px solid black", borderRadius: "8px", color: "black", height: "23px", padding: "21px" }} />
            <label htmlFor="">Phone Number</label>
            <input type="number" name='phone' style={{ border: "2px solid black", borderRadius: "8px", color: "black", height: "23px", padding: "21px" }} />
            <label htmlFor="">Adress</label>
            <input type="text" name='address' style={{ border: "2px solid black", borderRadius: "8px", color: "black", height: "23px", padding: "21px" }} />
            <div style={{ marginTop: "25px" }}>
              <p>
                Checked the information ?{' '}
                <button
                  className='check_infor'
                  style={{
                    width: "50px",
                    backgroundColor: "#fff",
                    color: "black",
                    borderRadius: "8px",
                    padding: "5px",
                    border: "2px solid black"
                  }}
                  type='submit'
                  onClick={handleClick}
                  disabled={confirmed}
                >
                  {confirmed ? <i className="fa-solid fa-check"></i> : 'x'}
                </button>{' '}
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className='checkout_form_bottom'>
        <h5><i className="fa-brands fa-paypal"></i> PAYMENTS DETAILS</h5>
        <p>Payment Type :</p>
        {/* <label htmlFor="">CASH</label>  */}
        <form onSubmit={(eventForm) => {
          eventForm.preventDefault();
          checkOut(eventForm);
        }}>
          <div className='payment'>
            <img src="../../images/Logo-MoMo-Transparent.webp" alt="" style={{ width: "50px", height: "30px" }} />
            <input style={{ height: "25px", width: "30px", display: "inline-block" }} name='payment' value={"CASH"} type="radio" />
          </div>
          <div className='payment'>
            <img src="../../images/ZaloPay_Logo.png" alt="" style={{ width: "69px", height: "30px" }} />
            <input style={{ height: "25px", width: "25px", display: "inline-block" }} name='payment' value={"ZALO"} type="radio" />
          </div>
          <div className='payment'>
            <img src="../../images/money.jpg" style={{ width: "55px" }} />
            <input style={{ height: "25px", width: "30px", display: "inline-block" }} name='payment' value={"CASH"} type="radio" />
          </div>
          <button className='button_checkout' type='submit' style={{ width: "100%", padding: "5px", backgroundColor: "black", color: "#fff", borderRadius: "8px", marginTop: "25px" }}>CHECK OUT</button>
        </form>
      </div>
    </div>
  )
}
