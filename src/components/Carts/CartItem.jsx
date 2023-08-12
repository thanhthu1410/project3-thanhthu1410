import React, { useContext, useEffect, useState } from 'react'
import "./Cart.scss"
import api from '../../services/api';
import { message, Popconfirm, Button } from 'antd';
import { RootContext } from '../../App';
import { convertToUSD } from '@mieuteacher/meomeojs';
export default function CartItem({ cartItems }) {
    const { cartStore,userStore, cartActions, dispatch } = useContext(RootContext);
    const [quantity, setQuantity] = useState(cartItems.quantity);

    function handleDele(product_id) {
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
    //     <Popconfirm
    //     placement="bottom"
    //     title={`Are you sure to delete ${cartItems.product.name}??`}
    //     onConfirm={() => {
    //         handleDele(cartItems.id)
          
    //     }}
    //     okText="Yes"
    //     cancelText="No"
    // >
     
        if(typeBtn == "-") {
            if(quantity == 1) {
                if(window.confirm("xóa ok!")) {
                    api.purchase.updateCart(userStore?.data?.id,{
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
                }else{
                    return
                }
            }
            api.purchase.updateCart(userStore?.data?.id,{
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
        }else {
            api.purchase.updateCart(userStore?.data?.id,{
                type: 1,
                cart_detail_record_edited: {
                    id: cartItems.id,
                    quantity: quantity + 1
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
    }

    return (
        <>
            <div className='item_product'>
                <div className='item_img'>
                    <img src={cartItems.product.avatar} alt="" />
                </div>
                <div className='item_detail' style={{ width: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "90%", alignItems: "center" }}><p >Name : {cartItems.product.name}</p>
                        <p>{`${convertToUSD(cartItems.product.Price)}`}</p>
                        <Popconfirm
                            placement="bottom"
                            title={`Are you sure to delete ${cartItems.product.name}??`}
                            onConfirm={() => {
                                handleDele(cartItems.id)
                              
                            }}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button><i className="fa-solid fa-trash-can"></i></Button>
                        </Popconfirm>
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
