import React from "react";
import "./Header.scss";

import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
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
                {loggedInUser ? (
                    <div className="navbar__menu">
                        <div>
                            Welcome{" "}
                            <Link to="/me">{loggedInUser?.userName}!</Link>
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
