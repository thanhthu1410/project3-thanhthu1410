import { Route } from "react-router-dom";
import Banner from "../../components/Banners/Banner"
import Home from './Home'
import About from "./components/abouts/About";
import LazyLoad from "../../lazy_loadings/lazyLoading"
import AdminPageRoute from "../../pages/admin/RouteAdminPage";
import Direction from "./components/direction/Direction";


export default (
  <Route path="/" element={<Home />}>
      <Route index element={<Banner/>} />
      {/* <Route path="/news" element={}></Route> */}
      <Route path="/news/" element={<About/>}></Route>
      <Route path="/direction/" element={<Direction/>}></Route>
      {/* {AdminRoute} */}
      <Route path="/menu/:category" element={LazyLoad(()=>import("../../components/Menus/Menu"))()}></Route>
      <Route path="/product/:id" element={LazyLoad(() => import("../../components/Menus/Item"))()}></Route>
      <Route path="/find" element={LazyLoad(()=> import("../../components/Finds/FindStore"))()}></Route>
      {/* <Route path="/admin_page" element={<AdminPage/>}></Route> */}
      {AdminPageRoute}
     <Route path="/checkout" element={LazyLoad(()=>import("../home/components/checkouts/CheckOut"))()}></Route>
  </Route>
);
