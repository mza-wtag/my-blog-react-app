import React from "react";

const BlogCard = ({ blog }) => {
  const { title, body, tags, image } = blog;
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>{tags}</p>
      <img src={image} alt="image" />
    </div>
  );
};

export default BlogCard;
