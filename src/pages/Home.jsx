import React from "react";
import BlogList from "@components/BlogList/BlogList";
import { useSelector } from "react-redux";

const Home = () => {
  const blogs = useSelector((state) => state.blog);
  return (
    <div className="container">
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
