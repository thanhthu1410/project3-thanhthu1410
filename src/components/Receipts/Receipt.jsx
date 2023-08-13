import React, { useEffect, useState, useContext } from 'react';
import "./Receipt.scss";
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';
import { RootContext } from '../../App';
import { Link } from 'react-router-dom';

export default function Order() {
    const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null)

    const { receiptStore ,userStore} = useContext(RootContext);

    const [receipts, setReceipts] = useState(receiptStore.data)

    useEffect(() => {
        //console.log("receipts", receipts)
    }, [receiptStore])

    return (
        <div>
            <div className='header-receipt'><Link to={"/"}>Home</Link> / Purchase Page</div>
            
            {isLogin ? (receipts?.map((receipt, index) =>
                <section className="h-100 gradient-custom" id='order' key={randomId()}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-10 col-xl-8">
                                <div className="card" style={{ borderRadius: 10 }}>
                                    <div className="card-header px-4 py-5">
                                        <h5 className="text-muted mb-0">
                                            Thanks for your Order,{" "}
                                            <span style={{ color: "#a8729a" }}>{userStore?.data?.user_name}</span>!
                                        </h5>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <p className="lead fw-normal mb-0" style={{ color: "#a8729a" }}>
                                                Receipt
                                            </p>
                                            <p className="small text-muted mb-0">
                                                Receipt No : {index + 1}
                                            </p>
                                        </div>
                                        {receipt.receipt_details?.map((product) =>
                                            <div className="card shadow-0 border mb-4" key={randomId()}>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img
                                                                src={product.product.avatar}
                                                                className="img-fluid"
                                                                alt="Phone"
                                                            />
                                                        </div>
                                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center" style={{width:"250px"}}>
                                                            <p className="text-muted mb-0" >{product.product.name}</p>
                                                        </div>

                                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                            <p className="text-muted mb-0 small">Quantity: {product.quantity}</p>
                                                        </div>
                                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                            <p className="text-muted mb-0 small">Price : {convertToUSD(product.product.Price)}</p>
                                                        </div>
                                                    </div>
                                                    <hr
                                                        className="mb-4"
                                                        style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                                    />
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-md-2">
                                                            <p className="text-muted mb-0 small">Track Order</p>
                                                        </div>
                                                        <div className="col-md-10">
                                                            <div
                                                                className="progress"
                                                                style={{ height: 6, borderRadius: 16 }}
                                                            >
                                                                <div
                                                                    className="progress-bar"
                                                                    role="progressbar"
                                                                    style={{
                                                                        width: "20%",
                                                                        borderRadius: 16,
                                                                        backgroundColor: "#a8729a"
                                                                    }}
                                                                    aria-valuenow={20}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                                </div>
                                                            <div className="d-flex justify-content-around mb-1">
                                                                <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                                    Out for delivary
                                                                </p>
                                                                <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                                    Delivered
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="d-flex justify-content-between pt-2">
                                            <p className="fw-bold mb-0">Order Details</p>
                                            <p className="text-muted mb-0">
                                                <span className="fw-bold me-4">Total</span>{convertToUSD(receipt.receipt_details.reduce((total, product) => {
                                                    return total + product.quantity * product.product.Price
                                                }, 0))}
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-muted mb-0">RECEIPT CODE: {receipt.receipt_code}</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-muted mb-0">Invoice Date : {receipt.update_at}</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-muted mb-0">PAY MODE: {receipt.pay_mode}</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-muted mb-0">Paid : {receipt.paid ? "Paid" : "UnPaid"}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="card-footer border-0 px-4 py-5"
                                        style={{
                                            backgroundColor: "#a8729a",
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10
                                        }}
                                    >
                                        <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                                            Total paid: <span className="h2 mb-0 ms-2">{convertToUSD(receipt.receipt_details.reduce((total, product) => {
                                                    return total + product.quantity * product.product.Price
                                                }, 0))}</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </section>
            )) : (<div><h1>No Orders</h1></div>)}
        </div>
    )
}