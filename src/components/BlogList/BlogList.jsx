import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "@components/BlogCard/BlogCard";
import "@components/BlogList/blogList.scss";
import NotFound from "@components/NotFound/NotFound";

const BlogList = ({ blogs }) => {
  const queryString = useSelector((state) => state?.search?.searchQuery);
  const searchedBlogs = blogs?.filter((blog) =>
    blog?.title.includes(queryString.toLowerCase())
  );

  return (
    <>
      {searchedBlogs?.length > 0 ? (
        <div className="blog-list">
          {searchedBlogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <NotFound text="No Blogs Found." />
      )}
    </>
  );
};

export default BlogList;
