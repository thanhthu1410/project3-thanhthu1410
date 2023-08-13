import { Route } from "react-router-dom";
import AdminPage from "./AdminPage";
import ListProduct from "./listProducts/ListProduct";
import LazyLoad from "../../lazy_loadings/lazyLoading";
import api from "../../services/api";
import NotAdmin from "./NotAdmin";
let isAdmin = false;
async function authenAdmin () {

    await api.users.authenToken({
        token: localStorage.getItem("token")
    }).then(res => {
        if(res.status == 200) {
            if(res.data.data.role == 'ADMIN') {
                isAdmin = true;
            }
        }
    }).catch(err => {
        console.log("err",err);
    })

    if(isAdmin) {
        return LazyLoad(() => import("../admin/AdminPage"))();
    }else {
        return <NotAdmin></NotAdmin>
    }
}
export default (
    <Route path="admin" element={await authenAdmin()}>
        <Route index element={<ListProduct/>}></Route>
        <Route path="/admin/add_product" element={LazyLoad(()=>import("./addproducts/AddProduct"))()}></Route>
        <Route path="/admin/list_categories" element={LazyLoad(()=>import("./listCategories/ListCategories"))()}></Route>
        <Route path="/admin/list_customer" element={LazyLoad(()=>import("./listcustomers/ListCustomer"))()}></Route>
    </Route>
)