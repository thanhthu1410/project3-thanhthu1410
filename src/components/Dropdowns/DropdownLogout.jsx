import React from 'react';
import './dropdown.scss';
import { useNavigate } from 'react-router-dom';

export default function DropdownLogout({ userStore }) {
    const navigate = useNavigate();
    const handleLogout = () => {
        if (window.confirm("Do you want to log out ?")) {
            localStorage.removeItem("token");
            // dispatch(userLoginActions.logOut());
            navigate("/login");
        }
    };
    return (
        <div className="dropdown">
            <button
                className="btn dropdown-toggle account-btn"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
            >
                <ion-icon name="person-outline"></ion-icon>
               
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li style={{cursor:"pointer"}}>
                    <a className="dropdown-item" href="/user_profile">
                        Profile
                    </a>
                </li>
                <li style={{cursor:"pointer"}}>
                    <a className="dropdown-item" href="/purchase">
                        Purchase History
                    </a>
                </li>
                <li style={{cursor:"pointer"}}>
                    <a className="dropdown-item" onClick={() => {
                        handleLogout()
                    }}>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    )
}