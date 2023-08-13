import React, { useEffect, useState } from 'react';
import "./Menu.scss";
import { Link, useParams } from 'react-router-dom';
import { RootContext } from '../../App';
import { useContext } from 'react';

export default function Menu() {
    const {productStore,dispatch,productActions} = useContext(RootContext)
    const [dataLoaded, setDataLoaded] = useState(false);
    const { category } = useParams()
       useEffect(()=>{
        dispatch(productActions.findCategories(category))
        setDataLoaded(true);
        console.log("category",productStore);
    },[category])
  
    return (
        <div style={{ backgroundColor: "#f5eee8" }}>
            <div className='title_container'>
                <img src="../../images/titleMenu.png" alt="" />
            </div>
           
            <div className='render_container'>
           
                {
                  productStore?.data?.map((item,index)=>(
                        <div className='item_container' key={index} >
                            <div  className='item_container_chirld' >
                                <div className='item_img'  >
                                    <img style={{ width: "100%" }} src={item.avatar} alt="" />
                                </div>
                                <div className='name_item'  >
                                    <h4><i className="fa-regular fa-heart"></i> {item.name}</h4>
                                </div>
                            <button className='detail_button'><Link to={`/product/${item.id}`}>Detail</Link></button>
                          
                        </div>
                    </div>
                    ))
                }
               
            </div>
        </div>
    )
}
