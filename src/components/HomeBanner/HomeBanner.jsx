import React from "react";
import "@components/HomeBanner/homeBanner.scss";
import { useSelector } from "react-redux";

const HomeBanner = ({ blog }) => {
  const { loggedInUser } = useSelector((state) => state.auth);
  const { title, tags, image, createdAt, creatorFullName, creatorImage } = blog;
  return (
    <div className="banner">
      <img src={image} className="banner__image" alt="Blog Banner" />
      {loggedInUser ? (
        <div className="banner__auth-info-wrapper">
          <div className="banner__auth-info-wrapper__heading">
            <div className="banner__auth-info-wrapper__heading--category-badge">
              {tags}
            </div>
            <h3 className="banner__auth-info-wrapper__heading--title">
              {title}
            </h3>
          </div>
          <div className="banner__auth-info-wrapper__identity">
            <img
              src={creatorImage}
              alt="Author"
              className="banner__auth-info-wrapper__identity--image"
            />
            <p className="banner__auth-info-wrapper__identity--name">
              {creatorFullName}
            </p>
            <p className="banner__auth-info-wrapper__identity--createdAt">
              {createdAt}
            </p>
          </div>
        </div>
      ) : (
        <div className="banner__info-wrapper">
          <div className="banner__info-wrapper__heading">
            <div className="banner__info-wrapper__heading--category-badge">
              {tags}
            </div>
            <h3 className="banner__info-wrapper__heading--title">{title}</h3>
          </div>
          <div className="banner__info-wrapper__identity">
            <img
              src={creatorImage}
              alt="Author"
              className="banner__info-wrapper__identity--image"
            />
            <p className="banner__info-wrapper__identity--name">
              {creatorFullName}
            </p>
            <p className="banner__info-wrapper__identity--createdAt">
              {createdAt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeBanner;
