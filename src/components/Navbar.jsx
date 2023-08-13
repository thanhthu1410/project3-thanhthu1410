import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Carts/Cart';
import Search from './Searchs/Search';
import DropdownLogout from './Dropdowns/DropdownLogout';
import DropdownLogin from './Dropdowns/DropdownLogin';
import axios from 'axios';
import { RootContext } from '../App';

export default function Navbar() {
  const[listCategories,setListCategories] = useState([])
  const { cartStore, userStore,setCartStoreRender,cartStoreRender} = useContext(RootContext);
  

  useEffect(()=>{
      axios.get("http://localhost:4000/apis/v1/category")
      .then((res)=>{setListCategories(res.data.data)})
      .catch((err)=>{
          console.log("catch");
      })
     
  },[])

  const navigate = useNavigate()
  const [showInput, setShowInput] = useState(false);
  const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null);

  return (
    <nav>
      <div className="nav_content">
        <div className="left_content" style={{width:"200px"}}>
          {/* Logo */}
          <img src="../../images/logo11.jpg" className="logo" />
        </div>
        <div className="middle_content">
          <div className='item'>
            <a href="/" style={{ color: "#6e2e27" }} onClick={() => navigate("/")} >HOME</a>
          </div>
          <div className='item'>
            {/* <Link style={{color:"#6e2e27"}} to={"/menu"}>Menu</Link> */}
            <div className="dropdown">
              <button
                style={{ border: "none", boxShadow: "none", backgroundColor: "#fff", color: "#6e2e27", fontWeight: "850", fontSize: "16px" }}
                className="btn btn-primary dropdown-toggle menu-button"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"

              >
                MENU
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {
                    listCategories?.map((item,index)=>(
                      <Link key={index} to={`/menu/${item.id}`}><span className="dropdown-item">{item.title}</span></Link>
                    ))
                  }
              </ul>
            </div>
          </div>
          <div className='item'>
            <Link style={{ color: "#6e2e27" }} to={"/news"}>NEWS</Link>
          </div>
          <div className='item'>
          <Link style={{ color: "#6e2e27" }} to={"/direction"}>DIRECTION</Link>
          </div>
        </div>
        <div className="right_content">
          <span><Search /></span>
          {/* Wishlist */}
          <Link to={"/news"}> <i style={{ color: "#6e2e27" }} className="fa-regular fa-heart"></i></Link>
         
          {/* Cart */}
          <span><Cart cartStore={cartStore} /></span>
          <span>
            {isLogin ? <DropdownLogout userStore={userStore} /> : <DropdownLogin />}
          </span>
        </div>
      </div>
    </nav>
  )
}
