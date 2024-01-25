import React from "react";
import "./BlogCard.scss";
const BlogCard = ({ blog }) => {
  const { title, tags, image, createdAt } = blog;
  return (
    <div className="blog-card">
      <img src={image} className="blog-card__banner" />
      <div className="blog-card__category-badge">{tags}</div>
      <h3 className="blog-card__blog-title">{title}</h3>
      <div className="blog-card__author-info">
        <img
          src=""
          alt="Image"
          className="blog-card__author-info__author-image"
        />
        <p className="blog-card__author-info__author-name">John</p>
        <p className="blog-card__author-info__blog-createdAt">{createdAt}</p>
      </div>
    </div>
  );
};

export default BlogCard;
