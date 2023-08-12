import React, { useEffect, useState } from 'react'
import "./ListProduct.scss"
import axios from 'axios'

export default function ListProduct() {
    const[listProducts,setListProducts] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/apis/v1/products")
        .then((res)=>{console.log("res ne",setListProducts(res.data.data))})
        .catch((err)=>{
            
            console.log("catch");
            return
        })
    },[])
   
  return (
    <div className='list_product_container'>
        <div className='list_product_container_chirld'>
            {listProducts?.map((product,index)=>(
            <div className='item_admin' key={index}>
               <div className='item_admin_chirld'>
               <div className='item_img'>
                       <img src={product.avatar} alt="" /> 
                </div>
                <div className='detail_item_admin'>
                    <p>Name: {product.name}</p>
                    <p>Price: {product.Price}</p>
                    <p>Active : 1</p>
                </div>
               </div>
            </div>
           ))}
            
        </div>
    </div>
  )
}
