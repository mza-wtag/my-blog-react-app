import React from "react";
import { useSelector } from "react-redux";
import NotFound from "@components/NotFound/NotFound";
import HomeBanner from "@components/HomeBanner/HomeBanner";
import FilterBlogs from "@components/FilterBlogs/FilterBlogs";
import BlogList from "@components/BlogList/BlogList";
import tags from "@constants/tags.json";

const Home = () => {
  const blogs = useSelector((state) => state.blog);

  return (
    <div className="container">
      {blogs.length === 0 ? (
        <NotFound text={"No Data Found"} />
      ) : (
        <>
          <HomeBanner blog={blogs[0]} />
          <div className="common-title-filter-holder">
            <h2>Latest Posts</h2>
            <FilterBlogs tags={tags} />
          </div>
          <BlogList blogs={blogs} />
        </>
      )}
    </div>
  );
};

export default Home;
