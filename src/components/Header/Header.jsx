import React from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/images/icons/search.svg";
import LogoutIcon from "../../assets/images/icons/Frame.svg";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);

  const handleLogout = () => {
    dispatch(logoutUser());
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
            <button onClick={handleLogout} className="navbar__logout-btn">
              <img src={LogoutIcon} alt="Logout" />
            </button>
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
