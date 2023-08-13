import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {convertToUSD,randomId} from "@mieuteacher/meomeojs"
import ReceiptPop from './ReceiptPop'

export default function ListReceipt() {
    const [listReceipt,setListReceipts] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/apis/v1/receipts")
        .then(res => setListReceipts(res.data.data))
        .catch(err => console.log("err",err))
    },[])
    useEffect(()=>{
        console.log("listReceipt",listReceipt);
    },[listReceipt])
  return (
    <div>
      <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Receipt Code</th>
                        <th scope="col">Pay Mode</th>
                        <th scope="col">Paid</th>
                        <th scope="col">Total</th>
                        <th scope="col">Create At</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {listReceipt?.map((item, index) => (
                        <tr key={randomId()}>
                            <th style={{color:"black"}} scope="row">{index + 1}</th>
                            <td>{item.receipt_code}</td>
                            <td>{item.pay_mode}</td>
                            <td style={{color:"black"}}>{item.paid == true ? "Paid" : "Unpaid"}</td>
                            <td>{convertToUSD(item.total)}</td>
                            <td>{item.create_at}</td>
                            <td>{item.user.user_name}</td>
                            <td><ReceiptPop receiptDetails={item.receipt_details} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}
