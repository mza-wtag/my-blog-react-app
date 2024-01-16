import React from "react";
import "./Header.scss";

import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedUser");
        navigate("/login");
    };
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar__title">
                    WellBlog
                </Link>
                <div className="navbar__search">
                    <input type="search" placeholder="Search" />
                </div>
                {user ? (
                    <div className="navbar__auth-access">
                        <div>
                            {/* Welcome <Link to="/">{user.userName}!</Link> */}
                            <Link to="/login" onClick={handleLogout}>
                                Logout
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="navbar__auth-access">
                        <Link to="/login">Login</Link> <span> / </span>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Header;
