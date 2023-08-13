import React, { useContext, useEffect, useState } from 'react'
import "./Cart.scss"
import api from '../../services/api';
import { message, Popconfirm, Button, Modal } from 'antd';
import { RootContext } from '../../App';
import { convertToUSD } from '@mieuteacher/meomeojs';
export default function CartItem({ cartItems }) {
  const { cartStore, userStore, cartActions, dispatch, localCartState, setLocalCartState } = useContext(RootContext);
  const [quantity, setQuantity] = useState(cartItems.quantity);

  function handleDele(product_id) {
    if (!localStorage.getItem("token")) {
      if (localStorage.getItem("carts")) {
        let carts = JSON.parse(localStorage.getItem("carts"));
        carts = carts.filter(item => item.product_id != product_id);
        localStorage.setItem("carts", JSON.stringify(carts)); // save
        setLocalCartState(!localCartState) // reload ui

      }
      return
    }
    api.purchase.deleteProduct(product_id)
      .then(res => {
        if (res.status == 200) {
          dispatch(cartActions.deleteProduct(product_id))
          message.success(res.data.message);
        } else {
          message.error(res.data.message);
        }
      })

  }

  function updateCart(typeBtn) {

    if (!localStorage.getItem("token")) {

      if (localStorage.getItem("carts")) {
          let carts = JSON.parse(localStorage.getItem("carts"));
          if (typeBtn == "-") {
              for (let i in carts) {
                  if (quantity == 1) {
                    carts.splice(i, 1);
                  } else {
                    carts = carts.map(item => {
                      if(item.product_id == cartItems.product.id) {
                        item.quantity -= 1;
                      }
                      return item
                    })
                  }
                  localStorage.setItem("carts", JSON.stringify(carts)); // save
              }
          } else {
            carts = carts.map(item => {
              if(item.product_id == cartItems.product.id) {
                item.quantity += 1;
              }
              return item
            })
              localStorage.setItem("carts", JSON.stringify(carts)); // save
          }
          setLocalCartState(!localCartState) // reload ui
      }
      return
  }

    if (typeBtn == "-") {
      if (quantity == 1) {
        if (window.confirm(`Are you sure to delete ${cartItems.product.name}??`)) {
          api.purchase.updateCart(userStore?.data?.id, {
            type: 0,
            cart_detail_record_edited: {
              id: cartItems.id
            }
          }).then(res => {
            api.purchase.findCart(userStore.data?.id)
              .then(res => {
                if (res.status == 200) {
                  dispatch(cartActions.setCartData(res.data?.data))
                } else {
                  alert('error')
                }
              }).catch(err => {
                alert('sap !')
              })
          }).catch(err => {
            alert('error!')
          })
        } else {
          return
        }
        api.purchase.updateCart(userStore?.data?.id, {
          type: 1,
          cart_detail_record_edited: {
            id: cartItems.id,
            quantity: quantity - 1
          }
        }).then(res => {
          api.purchase.findCart(userStore.data?.id)
            .then(res => {
              if (res.status == 200) {
                dispatch(cartActions.setCartData(res.data?.data))
              } else {
                alert('error')
              }
            }).catch(err => {
              alert('sap !')
            })
        }).catch(err => {
          alert('error!')
        })
      } else {
        api.purchase.updateCart(userStore?.data?.id, {
          type: 1,
          cart_detail_record_edited: {
            id: cartItems.id,
            quantity: quantity - 1
          }
        }).then(res => {
          api.purchase.findCart(userStore.data?.id)
            .then(res => {
              if (res.status == 200) {
                dispatch(cartActions.setCartData(res.data?.data))
              } else {
                alert('error')
              }
            }).catch(err => {
              alert('sap !')
            })
        }).catch(err => {
          alert('error!')
        })
      }
    }else {
      api.purchase
          .updateCart(userStore?.data?.id, {
              type: 1,
              cart_detail_record_edited: {
                id: cartItems.id,
                quantity: quantity + 1,
              },
          })
          .then((res) => {
              api.purchase
                  .findCart(userStore.data?.id)
                  .then((res) => {
                      if (res.status == 200) {
                          dispatch(
                              cartActions.setCartData(res.data?.data)
                          );
                      } else {
                          alert("error 3");
                      }
                  })
                  .catch((err) => {
                      alert("sap !");
                  });
          })
          .catch((err) => {
              alert("error! 4");
          });
  }
  }


  useEffect(() => {
    console.log("cartItems", cartItems)
  }, [])
  return (
    <>
      <div className='item_product'>
        <div className='item_img'>
          <img src={cartItems.product.avatar} alt="" />
        </div>
        <div className='item_detail' style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "90%", alignItems: "center" }}><p >Name : {cartItems.product.name}</p>
            <p>{`${convertToUSD(cartItems.product.Price)}`}</p>
            {/* <Popconfirm
                            placement="bottom"
                            title={`Are you sure to delete ${cartItems.product.name}??`}
                            onConfirm={() => {
                                handleDele(cartItems.id)
                              
                            }}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button><i className="fa-solid fa-trash-can"></i></Button>
                        </Popconfirm> */}
            <i
              onClick={() => {
                Modal.confirm({
                  content: `Are you sure to delete ${cartItems.product.name}??`,
                  onOk: () => {
                    handleDele(cartItems.id == undefined ? cartItems.product_id : cartItems.id);
                  },
                  onCancel: () => {

                  }

                })
              }}
              style={{
                color: " #de7474",
                fontSize: "20px",
              }}
              className="fa-solid fa-trash"
            ></i>
          </div>
          <p>Note : {cartItems.note} </p>
          <div className='quantity'>
            {/* - */}
            <i onClick={() => {
              updateCart("+")
            }} className="fa-solid fa-plus"></i>
            <span style={{ padding: "0px 10px" }}>{quantity}</span>
            {/* + */}
            <i onClick={() => {
              updateCart("-")
            }} className="fa-solid fa-minus"></i>
          </div>

        </div>
      </div>


    </>
  )
}
