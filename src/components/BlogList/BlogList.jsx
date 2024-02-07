import React from "react";
import BlogCard from "@components/BlogCard/BlogCard";
import "@components/BlogList/blogList.scss";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
