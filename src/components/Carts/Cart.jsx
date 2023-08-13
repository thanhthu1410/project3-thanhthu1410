import React, { useContext, useEffect, useState } from 'react'
import "./Cart.scss"
import CartItem from './CartItem';
import { RootContext } from '../../App';
import { convertToUSD } from '@mieuteacher/meomeojs';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
export default function Cart() {
    const { cartStore ,localCartState ,setLocalCartState } = useContext(RootContext);
    const [cartItems, setCartItems] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        if (cartStore.data) {
            setCartItems(cartStore.data.cart_details)
        }
    }, [cartStore.data])
    const[cartLocalCount, setCartLocalCount] = useState(null);
    const[cartLocalTotal, setCartLocalTotal] = useState(null);
    async function generateDataCart() {
        let carts = JSON.parse(localStorage.getItem("carts"));
        for (let i in carts) {
           carts[i].product = (await api.products.findProductById(carts[i].product_id).then(res => res.data.data))[0];
        }
        setCartItems(carts);

        setCartLocalCount(carts?.reduce((total, product) => {
            return total + product.quantity
        }, 0));

        setCartLocalTotal(carts?.reduce((total, product) => {
            return total + (product.quantity * product.product.Price)
        }, 0));
    }
    
    useEffect(() => {
      if(!localStorage.getItem("token")) {
        if(localStorage.getItem("carts")) {
          generateDataCart();
        }
      }
    }, [localCartState])
  
    // console.log("cartTotalLocal",cartTotalLocal);
    const cartTotal = cartStore.data?.cart_details?.reduce((total, product) => {
        return total + product.quantity
    }, 0) ?? 0;
    const subTotal = cartStore?.data?.cart_details?.reduce((total, product) => {
        return total + (product.quantity * Number(product.product.Price))
    }, 0) ?? 0;
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
                    <span className='quantityBag' >    {cartLocalCount != null ? cartLocalCount : cartTotal}</span>
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
                            <span>You have {cartLocalCount != null ? cartLocalCount : cartTotal} items in your cart !  </span> <br />
                            <span>Sub Total : { cartLocalTotal != null ? `${convertToUSD(cartLocalTotal)}` :`${convertToUSD(subTotal)}`}</span>

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

