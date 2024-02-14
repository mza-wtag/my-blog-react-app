import React from "react";
import { useSelector } from "react-redux";
import BlogList from "@components/BlogList/BlogList";
import HomeBanner from "@components/HomeBanner/HomeBanner";

import tags from "@constants/tags.json";
import FilterBlogs from "@components/FilterBlogs/FilterBlogs";

const Home = () => {
  const blogs = useSelector((state) => state.blog);
  return (
    <div className="container">
      <HomeBanner blog={blogs[0]} />
      <h2>Latest Posts</h2>
      <FilterBlogs options={tags} />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
