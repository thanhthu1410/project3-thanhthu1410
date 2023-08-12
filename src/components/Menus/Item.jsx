import React, { useContext, useEffect, useState } from 'react'
import "./Item.scss"
import { useParams } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import { RootContext } from '../../App';
import { message } from "antd"
import api from "@api"
import { convertToUSD } from '@mieuteacher/meomeojs';
export default function Item() {

  const [note, setNote] = useState("");
  const { productStore, dispatch, productActions, userStore, cartActions} = useContext(RootContext);

  useEffect(() => {
    AOS.init();
  }, []);

  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(productActions.findProductById(id));
  }, [id]);

  async function addToCart(productId, quantity) {
    console.log("productid",productId);
    const item = {
      product_id: parseInt(productId),
      quantity,
      note: note,
    };

    api.purchase.addToCart(userStore.data.id,item)
    .then(res => {
      if (res.status == 200) {
        dispatch(cartActions.addCart({
          data: res.data.data,
          quantity: item.quantity
        }))
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    })
    .catch(err => {
      message.error("Failed to add product to cart");
    })

  }
  useEffect(()=>{
    console.log("productStore",productStore);
  },[productStore])

  return (

    <div>
      <div className='containerAll'>
        {
          productStore?.data?.map((item, index) => (
            <div className='item_container' key={index}>
              <div className='item_container_left' data-aos="fade-right" data-aos-delay="300">
                <div className='item_img'>
                  <img src={item?.avatar} alt="" />
                </div>
              </div>
              <div className='item_container_right' data-aos="fade-left" data-aos-delay="300">
                <div className='content'>

                  <h2>{item?.name} </h2>
                  <img src="https://koithe.com/cache/60/70/greyscale/uploads-product_terms-59cf071bc493c.png" alt="" />
                  <p>Price:{`${convertToUSD(item.Price)}`}</p>
                  <p>Description :{item?.des}</p>
                  <p>Calories : {item?.calories} kl</p>
                  <div className='optionSugar'>
                    <span style={{ paddingRight: "15px" }}>Sugar:</span>
                    <select name="Sugar" id="" onChange={(e) => setNote(e.target.value)}>
                      <option value="Sugar-100%">100%</option>
                      <option value="Sugar-30%">30%</option>
                      <option value="Sugar-50%">50%</option>
                      <option value="Sugar-70%">70%</option>
                    </select>
                  </div>
                  <div className='quantity'>
                    <i onClick={() => setQuantity(quantity + 1)} className="fa-solid fa-plus"></i>
                    <span style={{ padding: "0px 10px" }}>{quantity}</span>
                    <i onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1)
                      }
                    }} className="fa-solid fa-minus"></i>
                  </div>
                  <button type="submit" onClick={() => addToCart(item?.id, quantity)} style={{ width: "80%", backgroundColor: "#6e2e27", color: "#fff", marginTop: "20px" }} >Buy Now!</button>
                </div>
              </div>

            </div>
          ))
        }

      </div>

    </div>
  )
}
