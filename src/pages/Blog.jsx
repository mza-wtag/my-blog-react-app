import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import { getBlogPostsFromLocalStorage } from "../actions/blogActions";

const Blog = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blog);
  const blogDetails = blogs.find((blog) => blog.id === id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogPostsFromLocalStorage());
  }, [dispatch]);
  if (!blogDetails) {
    return <div>Loading...</div>;
  }

  return <BlogDetails blogDetails={blogDetails} />;
};

export default Blog;
