import React from "react";
import BlogList from "@components/BlogList/BlogList";
import { useSelector } from "react-redux";
import HomeBanner from "@components/HomeBanner/HomeBanner";

const Home = () => {
  const blogs = useSelector((state) => state.blog);
  return (
    <div className="container">
      <HomeBanner blog={blogs[0]} />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
