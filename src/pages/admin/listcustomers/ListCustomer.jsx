import React, { useEffect, useState } from 'react'
import "./ListCustomer.scss"
import axios from 'axios'

export default function ListCustomer() {
    const [listCustomer,setListCustomer] = useState([])
    try{
        useEffect(() => {
            axios.get("http://localhost:4000/apis/v1/users")
            .then(res => setListCustomer(res.data.data))
            .catch(err => console.log("err",err))
        }, [])
       
    }catch (err) {
         
    }

    console.log("listCustomer", listCustomer)
  
    return (

        <table class="table">
            <thead>
                <tr>
                    <th scope="col" style={{textAlign: "left"}}>#</th>
                    <th scope="col" style={{textAlign: "left"}}>Email</th>
                    <th scope="col" style={{textAlign: "left"}}>Name</th>
                    <th scope="col" style={{textAlign: "left"}}>Update At</th>
                </tr>
            </thead>
            <tbody>
                {listCustomer.map((user,index)=>(
                              <tr>
                              <th scope="row" style={{color: "black", textAlign: "left"}}>{index + 1}</th>
                              <td>{user.email}</td>
                              <td>{user.first_name}</td>
                              <td>{user.update_at}</td>
                          </tr>
                ))}
              
              
            </tbody>
        </table>

    )
}
