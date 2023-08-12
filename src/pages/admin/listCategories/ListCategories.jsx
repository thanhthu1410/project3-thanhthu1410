import React, { useEffect, useState } from 'react'
import "./ListCategories.scss"
import axios from 'axios'
import { message } from 'antd'

export default function ListCategories() {
  const[listCategories,setListCategories] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/apis/v1/category")
    .then(res => setListCategories(res.data.data))

  },[])
  console.log("listCategories",listCategories);
  return (
    <div className='admin_categories'>
      <div style={{width:"50%"}}>
      <h2 style={{marginLeft:"10px"}}>List Categories </h2>
        <div className='category_item'>
          {listCategories.map((item)=>(
               <p>{item.title}</p>
          ))}
         
        </div>
      </div>
        <div className='add_categories'>
          <h2>ADD NEW CATEGORY</h2>
          <div className='form_add'>
           <form onSubmit={(e)=>{
              e.preventDefault();
             
              if(e.target.title.value == ""){
                message.error("Please Enter Name Category ! ")
              }else{
                console.log('new category',e.target.title.value)
                let newCategory = {
                  title:e.target.title.value
                }
                axios.post("http://localhost:4000/apis/v1/category",newCategory)
                .then(res => console.log(res), message.success("ADD NEW CATEGORY SUCCESSFULL"),
                axios.get("http://localhost:4000/apis/v1/category")
                .then(res => setListCategories(res.data.data))                
                )
                .catch(err => console.log("err",err))
              }
             
             

           }}>
              <label htmlFor=""> Name : </label>
              <input type="text" name='title' style={{borderBottom:"1px solid",color:"black"}} placeholder='Enter category name .... ' />
            <button type='submit'> Add   </button>
          </form>
          </div>
         
        </div>
    </div>
  )
}
