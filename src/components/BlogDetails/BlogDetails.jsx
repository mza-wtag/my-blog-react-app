import React from "react";
import PropTypes from "prop-types";
import "./BlogDetails.scss";
import defaultUserImage from "./../../assets/images/icons/default.png";

const BlogDetails = ({ blogDetails }) => {
  const { title, createdAt, image, tags, body, profileImage, fullName } =
    blogDetails;
  return (
    <div className="blog-details">
      <div className="blog-details__category-badge">{tags}</div>
      <h3 className="blog-details__blog-title">{title}</h3>

      <div className="blog-details__author-info">
        <img
          src={profileImage}
          alt="Author"
          className="blog-details__author-info__author-image"
        />
        <p className="blog-details__author-info__author-name">{fullName}</p>
        <p className="blog-details__author-info__blog-createdAt">{createdAt}</p>
      </div>
      <img src={image} className="blog-details__banner" alt="Blog Banner" />
      <p className="blog-details__body">{body}</p>
    </div>
  );
};

BlogDetails.propTypes = {
  blogDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogDetails;
