import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogList.scss";
import { useSelector } from "react-redux";

const BlogList = () => {
  const blogs = useSelector((state) => state.blog);

  return (
    <div className="blog-list">
      {blogs?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
