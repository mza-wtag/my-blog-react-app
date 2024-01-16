import React from "react";
import "./Header.scss";

import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const registeredUser = JSON.parse(localStorage.getItem("user"));
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    const handleLogout = () => {
        localStorage.removeItem("loggedUser");
        navigate("/login");
    };
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar__logo">
                    WellBlog
                </Link>
                <div className="navbar__search">
                    <input type="search" placeholder="Search" />
                </div>
                {loggedUser ? (
                    <div className="navbar__menu">
                        <div>
                            Welcome{" "}
                            <Link to="/me">{registeredUser.userName}!</Link>
                            <Link to="/login" onClick={handleLogout}>
                                Logout
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="navbar__menu">
                        <Link to="/login">Login</Link> <span> / </span>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Header;
