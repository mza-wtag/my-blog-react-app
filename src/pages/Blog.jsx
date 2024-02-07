import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BlogDetails from "@components/BlogDetails/BlogDetails";
import { getBlogPostsFromLocalStorage } from "@actions/blogActions";
import { Loader } from "@components/Loader/Loader";

const Blog = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blog);
  const blogDetails = blogs?.find((blog) => blog.id === id);

  if (!blogDetails) {
    return <Loader />;
  }

  return <BlogDetails blogDetails={blogDetails} />;
};

export default Blog;
