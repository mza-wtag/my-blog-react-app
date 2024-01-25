import React, { useEffect } from "react";
import BlogCard from "../BlogCard/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { initBlogPostsFromLocalStorage } from "../../actions/blogActions";

const BlogList = () => {
  const blogs = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initBlogPostsFromLocalStorage());
  }, [dispatch]);

  return (
    <div>
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
