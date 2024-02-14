import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import tags from "@constants/tags.json";
import { filterByTag } from "@actions/blogActions";
import "@components/FilterBlogs/filterBlogs.scss";

const FilterBlogs = () => {
  const dispatch = useDispatch();
  const selectedTag = useSelector((state) => state.filter.filteredTag);
  const [currentTag, setCurrentTag] = useState(selectedTag);

  useEffect(() => {
    setCurrentTag(selectedTag);
  }, [selectedTag]);

  const handleChange = (event) => {
    const tag = event.target.value;
    setCurrentTag(tag);
    dispatch(filterByTag(tag));
  };

  return (
    <div className="filter-container">
      <label htmlFor="filter">Filter By Tag Names:</label>
      <select id="filter" value={currentTag} onChange={handleChange}>
        <option value="">All</option>
        {tags &&
          tags.map((option, index) => (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterBlogs;
