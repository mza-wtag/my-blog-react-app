import React from "react";
import BlogList from "@components/BlogList/BlogList";
import { useSelector } from "react-redux";
import HomeBanner from "@components/HomeBanner/HomeBanner";
import NotFound from "@components/NotFound/NotFound";

const Home = () => {
  const blogs = useSelector((state) => state.blog);

  return (
    <div className="container">
      {blogs.length > 0 ? (
        <>
          <HomeBanner blog={blogs[0]} />
          <h2>Latest Posts</h2>
          <BlogList blogs={blogs} />
        </>
      ) : (
        <NotFound text="No blogs found" />
      )}
    </div>
  );
};

export default Home;
