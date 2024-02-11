import React from "react";
import "@components/HomeBanner/homeBanner.scss";
import { useSelector } from "react-redux";

const HomeBanner = ({ blog }) => {
  const { loggedInUser } = useSelector((state) => state.auth);
  const { title, tags, image, createdAt, creatorFullName, creatorImage } = blog;

  const wrapperClassName = loggedInUser
    ? "banner__auth-info-wrapper"
    : "banner__info-wrapper";

  return (
    <div className="banner">
      <img src={image} className="banner__image" alt="Blog Banner" />
      <div className={wrapperClassName}>
        <div className={`${wrapperClassName}-heading`}>
          <div className={`${wrapperClassName}-heading-category-badge`}>
            {tags}
          </div>
          <h3 className={`${wrapperClassName}-heading-title`}>{title}</h3>
        </div>
        <div className={`${wrapperClassName}-identity`}>
          <img
            src={creatorImage}
            alt="Author"
            className={`${wrapperClassName}-identity-image`}
          />
          <p className={`${wrapperClassName}-identity-name`}>
            {creatorFullName}
          </p>
          <p className={`${wrapperClassName}-identity-created-at`}>
            {createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
