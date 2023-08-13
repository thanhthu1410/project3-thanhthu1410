import React, { useEffect, useState } from 'react'
import "./ListProduct.scss"
import axios from 'axios'
import { Link } from 'react-router-dom'
import UpdateProduct from '../updateProducts/UpdateProduct'

export default function ListProduct() {
    const[listProducts,setListProducts] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/apis/v1/products")
        .then((res)=>{setListProducts(res.data.data)})
        .catch((err)=>{
            
            console.log("catch");
            return
        })
    },[])
    console.log("listproduct",listProducts);
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
                    <Link to={`/admin/update_product/${product.id}`}>Update</Link>
                </div>
               </div>
            </div>
           ))}
            
        </div>
    </div>
  )
}
