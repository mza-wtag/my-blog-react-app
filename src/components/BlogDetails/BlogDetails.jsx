import React from "react";
import PropTypes from "prop-types";
import "@components/BlogDetails/blogDetails.scss";

const BlogDetails = ({ blogDetails }) => {
  const { title, createdAt, image, tags, body, creatorFullName, creatorImage } =
    blogDetails;
  return (
    <div className="blog-details">
      <div className="blog-details__category-badge">{tags}</div>
      <h3 className="blog-details__blog-title">{title}</h3>

      <div className="blog-details__author-info">
        <img
          src={creatorImage}
          alt="Author"
          className="blog-details__author-info__author-image"
        />
        <p className="blog-details__author-info__author-name">
          {creatorFullName}
        </p>
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
