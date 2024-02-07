import React, { useEffect } from "react";
import BlogCard from "@components/BlogCard/BlogCard";
import "@components/BlogList/blogList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPostsFromLocalStorage } from "@actions/blogActions";

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
