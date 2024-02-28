import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBlogPosts } from "@actions/blogActions";
import SearchIcon from "@assets/images/icons/search.svg";
import "@components/Search/search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state?.search?.searchQuery);

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    dispatch(searchBlogPosts(searchQuery));
  };

  return (
    <div className="navbar__search">
      <input
        type="search"
        placeholder="Search"
        value={query}
        onChange={handleSearch}
      />
      <img src={SearchIcon} alt="search" />
    </div>
  );
};

export default Search;
