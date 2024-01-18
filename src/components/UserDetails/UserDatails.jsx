import React from "react";
import "./UserDetails.scss";
import facebook from "./../../assets/images/icons/facebook.png";
import twitter from "./../../assets/images/icons/twitter.png";
import instagram from "./../../assets/images/icons/instagram.png";
import youtube from "./../../assets/images/icons/youtube.png";

const UserDatails = () => {
  return (
    <>
      <section className="userDetails">
        <div className="userDetails__identity">
          <img
            className="userDetails__identity__image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&usqp=CAU"
            alt="Profile Picture"
          />
          <div className="userDetails__identity__info">
            <h2 className="userDetails__identity__info__fullname">
              Jonathan Doe
            </h2>
            <p className="userDetails__identity__info__subtitle">
              Web Developer
            </p>
          </div>
        </div>
        <p className="userDetails__about">
          Meet Jonathan Doe, a passionate writer and blogger with a love for
          technology and travel. Jonathan holds a degree in Computer Science and
          has spent years working in the tech industry, gaining a deep
          understanding of the impact technology has on our lives.
        </p>
        <div className="userDetails__social-media">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
          <img src={youtube} alt="youtube" />
        </div>
      </section>
    </>
  );
};

export default UserDatails;
