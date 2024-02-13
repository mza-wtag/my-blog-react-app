import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "@components/BlogCard/BlogCard";
import "@components/BlogList/blogList.scss";
import NotFound from "@components/NotFound/NotFound";

const BlogList = ({ blogs }) => {
  const queryString = useSelector((state) => state.search.searchQuery);
  const searchedBlogs = blogs?.filter((blog) =>
    blog?.title?.toLowerCase().includes(queryString)
  );

  return (
    <div className="blog-list">
      {searchedBlogs?.length > 0 ? (
        searchedBlogs?.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <NotFound text="No Blogs Found." />
      )}
    </div>
  );
};

export default BlogList;
