import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from '../../../stores/slices/product'
import "./AddProduct.scss"
import { message } from 'antd'
import axios from 'axios'
message.config({
    top: 150,
    duration: 1,
    maxCount: 1,
    rtl: true,
    prefixCls: 'my-message',
});

export default function AddProduct() {
    const urlPreviewRef = useRef();
    const storeCategories = useSelector(store => store.productStore)
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(productActions.findAllCategory())
    }, [])
    console.log("storeCategories", storeCategories);
    return (
        <div>

            <form onSubmit={async (e) => {
                e.preventDefault();
                let newProduct = {
                    avatar: e.target.avatar.files[0],
                    name: e.target.name.value,
                    des: e.target.des.value,
                    Price: Number(e.target.price.value),
                    category_id: parseInt(e.target.categories.value),
                    calories: Number(e.target.calo.value)
                }
                if (e.target.avatar.files.length == 0 ||
                    e.target.name.value == "" ||
                    e.target.des.value == "" ||
                    e.target.price.value == "" ||
                    e.target.categories.value == ""
                ) {
                    message.warning("Please check Detail of new product! ")
                    return
                }

                console.log("e.target.avatar.files[0]", e.target.avatar.files[0]);

                let fakeForm = new FormData();
                fakeForm.append("imgs", newProduct.avatar);
                fakeForm.append("product_infor", JSON.stringify(newProduct));
                axios.post("http://localhost:4000/apis/v1/products", fakeForm,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then(res => {
                        console.log("res", res)
                        message.success("ADD NEW PRODUCT SUCCESSFULL!");
                        // Reset form data
                       


                    })
                    .catch(err => {
                        console.log("err", err)
                        message.warning("Please Check Detail Product")
                    })
                console.log("newProduct", newProduct);

            }}>
                <div className='container_addproduct'>
                    <div className='add_product_left'>
                        {/* <div className='' style={{ padding: "15px" }}>
                            <input type="file" style={{ color: "black" }} name='avatar' /> <br />
                            <img src="http://gongcha.com.vn/wp-content/uploads/2023/07/Hinh-Web-Alisan-GC-nha%CC%83n-sen.png" alt="" />
                        </div> */}
                        <div className='product_image' style={{ padding: "15px" }}>
                            <input name="avatar" onChange={(event) => {
                                if (event.target.files.length == 0) {
                                    console.log("Chưa chọn hình!")
                                } else {
                                    let blodUrl = URL.createObjectURL(event.target.files[0])
                                    urlPreviewRef.current.src = blodUrl;
                                }
                            }} type="file" style={{ color: "black" }} />
                            <img ref={urlPreviewRef} src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" alt="" />
                        </div>

                    </div>
                    <div className='add_product_right'>
                        <div style={{ padding: "10px" }}>
                            <label htmlFor="">Name:</label>
                            <input name='name' type="text" placeholder='Name Product...' style={{ color: "black", border: "1px solid black", padding: "0px 10px" }} />
                            <label htmlFor="">Calories:</label>
                            <input name='calo' type="text" placeholder='Description Product...' style={{ color: "black", border: "1px solid black", padding: "0px 10px" }} />
                            <label htmlFor="">Description:</label>
                            <input name='des' type="text" placeholder='Description Product...' style={{ color: "black", border: "1px solid black", padding: "0px 10px" }} />
                            <label htmlFor="">Price:</label>
                            <input name='price' type="text" placeholder='Price...' style={{ color: "black", border: "1px solid black", padding: "0px 10px" }} />
                            <label htmlFor="">Categories:</label>
                            <select style={{ color: "black" }} name='categories'>
                                <option defaultValue={""}>Chosee</option>
                                {storeCategories?.data?.map((item, index) => (
                                    <option key={index} value={item.id}>{item.title}</option>
                                ))}

                            </select>
                            <button type='submit' style={{ backgroundColor: "black", color: "#fff", padding: "10px 25px" }}>Add Product</button>
                        </div>
                    </div>

                </div>
            </form>

        </div>
    )
}
