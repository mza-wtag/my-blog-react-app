import React from "react";
import BlogList from "@components/BlogList/BlogList";
import { useSelector } from "react-redux";

const Home = () => {
  const blogs = useSelector((state) => state.blog);
  return <BlogList blogs={blogs} />;
};

export default Home;
