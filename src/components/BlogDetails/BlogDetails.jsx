import React from "react";
import "./BlogDetails.scss";
import defaultUserImage from "./../../assets/images/icons/default.png";

const BlogDetails = ({ blogDetails }) => {
  const { title, createdAt, image, tags, body } = blogDetails;
  return (
    <div className="blog-details">
      <div className="blog-details__category-badge">{tags}</div>
      <h3 className="blog-details__blog-title">{title}</h3>

      <div className="blog-details__author-info">
        <img
          src={defaultUserImage}
          alt="Author"
          className="blog-details__author-info__author-image"
        />
        <p className="blog-details__author-info__author-name">John</p>
        <p className="blog-details__author-info__blog-createdAt">{createdAt}</p>
      </div>
      <img src={image} className="blog-details__banner" alt="Blog Banner" />
      <p className="blog-details__body">{body}</p>
    </div>
  );
};

export default BlogDetails;
