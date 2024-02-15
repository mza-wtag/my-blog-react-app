import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import BlogCard from "@components/BlogCard/BlogCard";
import NotFound from "@components/NotFound/NotFound";
import Button from "@components/Button/Button";
import "@components/BlogList/blogList.scss";

const BlogList = ({ blogs }) => {
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const filteredTag = useSelector((state) => state.filter.filteredTag);
  const [blogsToShow, setBlogsToShow] = useState(9);

  const filteredBlogs = blogs.filter((blog) => {
    const titleMatches = blog.title.includes(searchQuery.toLowerCase());
    const tagMatches = !filteredTag || blog.tags.includes(filteredTag);
    return titleMatches && tagMatches;
  });

  const handleShowMore = () => {
    setBlogsToShow((prevCount) => prevCount + 6);
  };

  return (
    <>
      <div className="blog-list">
        {filteredBlogs.length > 0 ? (
          filteredBlogs
            .slice(0, blogsToShow)
            .map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <NotFound text="No Blogs Found." />
        )}
      </div>
      {filteredBlogs.length > blogsToShow && (
        <Button className="blog-list__button" onClick={handleShowMore}>
          Load More
        </Button>
      )}
    </>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default BlogList;
