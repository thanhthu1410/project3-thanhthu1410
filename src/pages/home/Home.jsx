import "./home.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import { useTranslation } from "react-i18next";
import { RootContext } from "../../App";


function Home() {
  const { cartStore, userStore } = useContext(RootContext);

  const token = localStorage.getItem('token')

  const { t } = useTranslation();

  return (
    <div className="root_page">
      {/* Before Nav */}
      <section className="before_nav">
        <div className="before_nav_content">
          <div className="feature">
            {userStore?.data?.role == "ADMIN" ? <Link to={'/admin'} className="feature_item">Admin</Link> : <Link to={'/'} className="feature_item">MemberShip</Link>}
            <Link className="feature_item">Find a Store</Link>
            <Link className="feature_item">Hi {userStore?.data?.first_name}  !</Link>
          </div>
        </div>
      </section>
      {/* Navbar */}
      <Navbar userStore={userStore} cartStore={cartStore} />

      {/* Body */}
      <section className="body_container">
        <div className="body_container_center">
          <Outlet />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
