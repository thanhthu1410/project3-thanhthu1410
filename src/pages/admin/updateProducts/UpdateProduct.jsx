import React, { useContext, useEffect, useRef } from 'react'
import "./UpdateProduct.scss"
import { useParams } from 'react-router-dom'
import api from '@api';
import { RootContext } from '../../../App';
import { Modal } from 'antd';
export default function UpdateProduct() {
    const {dispatch,productActions } = useContext(RootContext);
const urlPreviewRef = useRef();
const [updateData, setUpdateData] = React.useState(null);
const{id} = useParams();
useEffect(() => {
    api.products.findProductById(id).then(res => {
        setUpdateData(res.data.data[0])
    })
}, [])
useEffect(() => {
    console.log("updateData", updateData)
}, [updateData])
async function updateProduct(eventForm) {
    eventForm.preventDefault();
    let updateInfor = {
          name: eventForm.target.name.value,
          des: eventForm.target.desc.value,
          Price: Number(eventForm.target.price.value),
    };
    console.log("updateInfor",updateInfor);
    let formData = new FormData();
    if(eventForm.target.avatar.files.length > 0) {
        formData.append("avatar", eventForm.target.avatar.files[0]);
    }
    formData.append("product_infor", JSON.stringify(updateInfor));

    api.products.update(updateData.id, formData).then(res => {
        if(res.status == 200) {
            Modal.success({
                content: res.data.message,
                onOk: () => {
                    api.products
                    .find()
                    .then((res) => {
                        if (res.status == 200) {
                        dispatch(productActions.addProducts(res.data.data));
                        setUpdateData(false);
                        } else {
                        alert(res.data.message);
                        }
                    window.location.href = "/admin"
                    })
                    .catch((err) => {
                        alert("Loiii");
                    });
                }
            })
        }else {
            Modal.error({
                content: res.data.message
            })
        }
    }).catch(err => {
        console.log("err", err)
    })
 }
    return (
        <div className='container_update_prd'>
         <form style={{width:"100%"}} onSubmit={(eventForm)=>{
                eventForm.preventDefault();
                updateProduct(eventForm)
         }}>
          <div className='container_update_chirld'>
                 <div className='update_left'>
            <h5>Product Image </h5>
                <div className='update_left_img'>
                    <img src={`${updateData?.avatar}`} ref={urlPreviewRef} alt="" />
                    <input
                        name="avatar"
                        onChange={(event) => {
                        if (event.target.files.length == 0) {
                            console.log("Chưa chọn hình!");
                        } else {
                            let blodUrl = URL.createObjectURL(event.target.files[0]);
                            urlPreviewRef.current.src = blodUrl;
                        }
                        }}
                        type="file"
          />
                </div>
              
            </div>
            <div className='update_right'>
                <h5>Product Detail</h5>
                <div>
                    <label htmlFor="">Name  : </label>
                    <input defaultValue={updateData?.name} type="text" name='name'style={{ border: "1px solid black", width: "500px", color: "black", borderRadius: "8px", padding: "10px", margin: "5px" }} />
                      <label htmlFor="">Price  : </label>
                    <input defaultValue={updateData?.Price} type="text" name='price' style={{ border: "1px solid black", width: "500px", color: "black", borderRadius: "8px", padding: "10px", margin: "5px" }} />
                    <label htmlFor="">Desc : </label>
                    <input defaultValue={updateData?.des} type="text" name='desc'  style={{ border: "1px solid black", width: "500px", color: "black", borderRadius: "8px", padding: "10px", margin: "5px" }} />
                    <button htmlType='submit' style={{ width: "150px", borderRadius: "8px", padding: "5px", marginTop: "15px", color: "#fff", backgroundColor: "black" }} ghost>Save</button>
                </div>
            </div>
            
          </div>
         </form>
        </div>
    )
}
