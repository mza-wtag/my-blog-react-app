import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { initBlogPostsFromLocalStorage } from "../actions/blogActions";
import BlogDetails from "../components/BlogDetails/BlogDetails";

const Blog = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blog);
  const blogDetails = blogs.find((blog) => blog.id === id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initBlogPostsFromLocalStorage());
  }, [dispatch]);
  if (!blogDetails) {
    return <div>Loading...</div>;
  }

  return <BlogDetails blogDetails={blogDetails} />;
};

export default Blog;
