import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import BlogCard from "@components/BlogCard/BlogCard";
import NotFound from "@components/NotFound/NotFound";
import "@components/BlogList/blogList.scss";

const BlogList = ({ blogs }) => {
  const searchQuery = useSelector((state) => state?.search?.searchQuery);
  const filteredTags = useSelector((state) => state?.filter?.filteredTags);

  const filteredBlogs = blogs.filter((blog) => {
    const titleMatches = blog.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const tagMatches =
      !filteredTags.length ||
      filteredTags.some((tag) => blog.tags.includes(tag));
    return titleMatches && tagMatches;
  });

  return (
    <>
      {filteredBlogs.length > 0 ? (
        <div className="blog-list">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <NotFound text="No Blogs Found." />
      )}
    </>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.array,
};

BlogList.defaultProps = {
  blogs: [],
};

export default BlogList;
