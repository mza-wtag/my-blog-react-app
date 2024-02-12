import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  searchBlogPosts,
  getBlogPostsFromLocalStorage,
} from "@actions/blogActions";
import SearchIcon from "@assets/images/icons/search.svg";
import "@components/Search/search.scss";
const Search = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      dispatch(getBlogPostsFromLocalStorage());
    } else {
      dispatch(searchBlogPosts(query));
    }
  };

  return (
    <div className="navbar__search">
      <input
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
      />
      <img src={SearchIcon} alt="search" />
    </div>
  );
};

export default Search;
