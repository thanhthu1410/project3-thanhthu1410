import "./main.scss";
import { Routes } from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
/* Route Config */
import AuthRoute from "@pages/auths/Route";
import HomeRoute from "@pages/home/Route";
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/user';
import { cartActions } from "@actions/cart"
import { productActions } from "@actions/product"
import api from "./services/api";
import { receiptActions } from "./stores/slices/receipt";
/* context*/
export const RootContext = createContext()
function App() {
  const store = useSelector(store => store)
  const dispatch = useDispatch();
  const [localCartState,setLocalCartState ] = useState(false)
  // const [cartStoreRender, setCartStoreRender] = useState(null);

  useEffect(() => {
    dispatch(userActions.authenToken())
  }, [])

  useEffect(() => {
    if (!store.userStore.data) {
      return
    }

    api.purchase.findCart(store.userStore.data?.id)
      .then(res => {
        if (res.status == 200) {
          // console.log("res.data?.data phuoc nekk", res.data?.data)
          dispatch(cartActions.setCartData(res.data?.data))
        } else {
          alert('error')
        }
      }).catch(err => {
        alert('sap !')
      })
  }, [store.userStore.data])

  useEffect(() => {
    if (!store.userStore.data) {
      return;
    }
    api.receipt
      .findReceipt(store.userStore.data?.id)
      .then((res) => {
        if (res.status == 200) {
          dispatch(
            receiptActions.setReceiptData(res.data.data)
          );
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert("sập!");
      });
  }, [store.userStore.data]);


  useEffect(() => {
    //console.log("receiptStore", store.receiptStore)
  }, [store])
  return (
    <RootContext.Provider value={{
      store,
      userStore: store.userStore,
      cartStore: store.cartStore,
      productStore: store.productStore,
      userActions,
      cartActions,
      productActions,
      dispatch,
      useSelector,
      receiptStore: store.receiptStore,
      localCartState,
      setLocalCartState
      // setCartStoreRender,
      // cartStoreRender
    }} >
      {/* Router */}   <Routes>
        {/* Auth Routing */}
        {AuthRoute}
        {/* Home */}
        {HomeRoute}
      </Routes>
    </RootContext.Provider>
  );
}

export default App;
