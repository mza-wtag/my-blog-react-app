import React, { useEffect } from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPostsFromLocalStorage } from "../../actions/blogActions";

const BlogList = () => {
  const blogs = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogPostsFromLocalStorage());
  }, [dispatch]);

  return (
    <div className="blog-list">
      {blogs?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
