import React from 'react';
import './dropdown.scss';

export default function DropdownLogin() {
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
                <li>
                    <a className="dropdown-item" href="register">
                        Register
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="login">
                        Login
                    </a>
                </li>
            </ul>
        </div>

    )
}