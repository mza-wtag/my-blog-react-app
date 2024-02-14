import React from "react";
import { useDispatch } from "react-redux";
import "@components/FilterBlogs/filterBlogs.scss";
import { filterByTag } from "@actions/blogActions";

const FilterBlogs = ({ options }) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(filterByTag(event.target.value));
  };

  return (
    <div className="filter-container">
      <label htmlFor="filter">Filter By:</label>
      <select id="filter" onChange={handleChange}>
        <option value="">Select an option</option>
        {options &&
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterBlogs;
