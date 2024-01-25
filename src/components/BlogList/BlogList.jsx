import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import { useSelector } from "react-redux";

const BlogList = () => {
  const blogs = useSelector((state) => state.blog);

  return (
    <div>
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
