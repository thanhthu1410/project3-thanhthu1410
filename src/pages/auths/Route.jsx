import { Route } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";

export default (
    <>
        <Route path="register" element={LazyLoad(() => import("./Register"))()}></Route>
        <Route path="login" element={LazyLoad(() => import("./Login"))()}></Route>  
        <Route path="user_profile" element={LazyLoad(() => import("./UserProfile"))()}></Route>
        <Route path="purchase" element={LazyLoad(() => import("../../components/Receipts/Receipt"))()}></Route>  
    </>
);
