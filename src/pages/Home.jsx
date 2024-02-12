import React from "react";
import { useSelector } from "react-redux";
import BlogList from "@components/BlogList/BlogList";
import NotFound from "@components/NotFound/NotFound";
import HomeBanner from "@components/HomeBanner/HomeBanner";

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
        <NotFound text="No Blogs Found" />
      )}
    </div>
  );
};

export default Home;
