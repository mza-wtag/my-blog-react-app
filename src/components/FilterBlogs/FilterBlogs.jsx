import React from "react";
import { useDispatch } from "react-redux";
import tags from "@constants/tags.json";
import { filterByTag } from "@actions/blogActions";
import "@components/FilterBlogs/filterBlogs.scss";

const FilterBlogs = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(filterByTag(event.target.value));
  };

  return (
    <div className="filter-container">
      <label htmlFor="filter">Filter By:</label>
      <select id="filter" onChange={handleChange}>
        <option value="">Select an option</option>
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
