import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogList.scss";
import { useSelector } from "react-redux";

const BlogList = () => {
  const { loggedInUser } = useSelector((state) => state.auth);

  const blogs = useSelector((state) => state.blog);

  let updatedBlogs =
    loggedInUser?.userName !== undefined
      ? blogs.filter((blog) => blog.blogCreator === loggedInUser?.userName)
      : blogs;

  return (
    <div className="blog-list">
      {updatedBlogs?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
