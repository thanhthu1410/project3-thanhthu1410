import React, { useState } from 'react'
import "./Search.scss"
import api from "@api"
import Img from './Img';
import LazyLoad from '../../lazy_loadings/lazyLoading';

export default function Search() {
    let timeOut; // tạo ra 1 biến để lưu timeout
    const [searchStatus, setSearchStatus] = useState(false);
    const [searchData, setSearchData] = useState([]);


    function search(e) {
        clearTimeout(timeOut); // việc đầu tiên khi on change là remove timeout sắp diễn ra.
        if (e.target.value == "") {
            setSearchData([]);
            return

        }
        // ghi đè timeout thành 1 time out mới  => nếu không onchange nữa thì sẽ không bị clear và sẽ diễn ra nội dung bên trong timeout
        timeOut = setTimeout(async () => {
            // call api
            setSearchStatus(true);
            try {
                if (searchStatus) {
                    return;
                }
                let result = await api.products.search(e.target.value);
                if (result.status == 200) {
                    // ok sau 1.5s thì update data và tắt hiệu ứng
                    setTimeout(() => {
                        setSearchStatus(false);
                        setSearchData(result.data.data);
                    }, 1500);
                } else {
                    // failed
                }
            } catch (err) {
                // lỗi call api
            }
        }, 600); // sau 700 ms không gõ thì thực thi
    }

    return (
        <>
            <button
                style={{ backgroundColor: "#fff", color: "#6e2e27", border: "none", fontSize: "20px", boxShadow: "none" }}
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal1"
                data-whatever="@getbootstrap"
            >
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <div

                className="modal fade "
                id="exampleModal1"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Search
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label"> </label>
                                    <input onChange={(e) => search(e)} type="text" className="form-control" id="recipient-name" placeholder='Search product by name...' />
                                </div>
                            </form>
                            <div className='search_container'>
                                {
                                    searchData?.map((item, index) => (
                                        <div className='search_container_item' key={index}>
                                            <div className='search_item_img' onClick={() => {
                                                window.open(
                                                    "/product/" + item.id,
                                                    "_blank"
                                                );
                                            }}>
                                                <img style={{ width: "150px" }} src={item.avatar} alt="" />
                                            </div>
                                            <div className='name_item'><h5>{item.name} </h5></div>
                                        </div>

                                    ))
                                }


                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                        {
                            searchStatus
                                ? <div className='loading'>
                                    <Img className='loading_icon' />
                                </div>
                                : <></>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
