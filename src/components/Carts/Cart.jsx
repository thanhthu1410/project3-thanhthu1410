import React, { useContext, useEffect, useState } from 'react'
import "./Cart.scss"
import CartItem from './CartItem';
import { RootContext } from '../../App';
import { convertToUSD } from '@mieuteacher/meomeojs';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
    const { cartStore } = useContext(RootContext);
    const [cartItems, setCartItems] = useState(null);
    const navigate = useNavigate()

    // const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        if (cartStore.data) {
            setCartItems(cartStore.data.cart_details)
        }
    }, [cartStore.data])
   
    const  cartTotal = cartStore.data?.cart_details?.reduce((total, product) => {
        return total + product.quantity
    }, 0);
    const  subTotal = cartStore?.data?.cart_details?.reduce((total, product) => {
        return total + (product.quantity * Number(product.product.Price))
    }, 0);
   
    useEffect(() => {
        console.log("cartStore", cartStore)
    }, [cartStore.data])
    return (
        <>
            <button
                style={{ backgroundColor: "#fff", color: "#6e2e27", border: "none", fontSize: "20px", boxShadow: "none" }}
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal2"
            >
                <div className='cart_icon_container'>
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className='quantityBag' >{cartTotal}</span>
                </div>

            </button>
            {/* Modal */}
            <div
                className="modal fade bd-example-modal-lg"
                id="exampleModal2"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel1"
                aria-hidden="true"

            >
                <div className="modal-dialog modal-xl" role="document" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel1">
                                SHOPPING BAG
                            </h5>
                        </div>
                        <div className="modal-body">
                            {cartItems?.map((item, index) => <CartItem key={Date.now() * Math.random()} cartItems={item} />)}

                        </div>
                        <div style={{ marginLeft: "30px" }}>
                            <span>You have {cartTotal} items in your cart !  </span> <br />
                            <span>Sub Total : {subTotal ? `${convertToUSD(subTotal)}` : 0}</span>

                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Countinue
                            </button>
                            {cartTotal != 0 ? <button type="button" onClick={() => navigate("/checkout")} className="btn btn-primary">
                                Check Out
                            </button> : <div></div>}
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

