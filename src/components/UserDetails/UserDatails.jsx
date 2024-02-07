import React from "react";
import PropTypes from "prop-types";
import "@components/UserDetails/userDetails.scss";
import { useSelector } from "react-redux";
import facebook from "@assets/images/icons/facebook.png";
import twitter from "@assets/images/icons/twitter.png";
import instagram from "@assets/images/icons/instagram.png";
import youtube from "@assets/images/icons/youtube.png";

const UserDatails = () => {
  const { loggedInUser } = useSelector((state) => state.auth);
  const { fullName, profileImage, subtitle, about } = loggedInUser;
  return (
    <>
      <section className="user-details">
        <div className="user-details__identity">
          <img
            className="user-details__identity_image"
            src={profileImage}
            alt="Profile Picture"
          />
          <div className="user-details__identity__info">
            <h2 className="user-details__identity__info_fullname">
              {fullName}
            </h2>
            <p className="user-details__identity__info_subtitle">{subtitle}</p>
          </div>
        </div>
        <p className="user-details__about">{about}</p>
        <div className="user-details__social-media">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
          <img src={youtube} alt="youtube" />
        </div>
      </section>
    </>
  );
};

UserDatails.propTypes = {
  loggedInUser: PropTypes.shape({
    fullName: PropTypes.string,
    profileImage: PropTypes.string,
    subtitle: PropTypes.string,
    about: PropTypes.string,
  }),
};

UserDatails.defaultProps = {
  loggedInUser: {
    fullName: "Guest",
    profileImage: "",
    subtitle: "",
    about: "",
  },
};
export default UserDatails;