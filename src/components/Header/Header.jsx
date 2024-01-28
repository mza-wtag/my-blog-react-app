import React from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/images/icons/search.svg";
import Logout from "../../assets/images/icons/Frame.svg";

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
          <img src={SearchIcon} alt="search" />
        </div>
        {loggedInUser ? (
          <div className="navbar__menu">
            Welcome
            <span className="navbar__user-name">
              <Link to="/me">{loggedInUser.firstName} !</Link>
            </span>
            <Link to="/login" onClick={handleLogout}>
              <img src={Logout} alt="Logout" />
            </Link>
          </div>
        ) : (
          <div className="navbar__menu">
            <Link to="/login">Login</Link> <span> / </span>
            <Link to="/register">Signup</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
