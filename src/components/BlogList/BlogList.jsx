import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "@components/BlogCard/BlogCard";
import NotFound from "@components/NotFound/NotFound";
import "@components/BlogList/blogList.scss";

const BlogList = ({ blogs }) => {
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const filteredTag = useSelector((state) => state.filter.filteredTag);

  const filteredBlogs = blogs.filter((blog) => {
    const titleMatches = blog.title.includes(searchQuery.toLowerCase());
    const tagMatches = !filteredTag || blog.tags.includes(filteredTag);
    return titleMatches && tagMatches;
  });

  return (
    <div className="blog-list">
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <NotFound text="No Blogs Found." />
      )}
    </div>
  );
};

export default BlogList;
