import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByTag } from "@actions/blogActions";
import tags from "@constants/tags.json";
import "./filterBlogs.scss";

const FilterBlogs = () => {
  const dispatch = useDispatch();
  const selectedTag = useSelector((state) => state?.filter?.filteredTag);
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
    <div className="filter-blogs">
      <label className="filter-blogs__label">Filter Blogs By Tags:</label>
      <select
        className="filter-blogs__select"
        value={currentTag}
        onChange={handleChange}
      >
        <option className="filter-blogs__option" value="">
          All
        </option>
        {tags &&
          tags?.map((option, index) => (
            <option
              key={index}
              className="filter-blogs__option"
              value={option.value}
            >
              {option.value}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterBlogs;
