import React from "react";

const SearchBar = ({keyword, keywordChange}) => {
  return (
    <input 
      type="text"
      className="search-bar"
      placeholder="Search title notes"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}/>
  );
}

export default SearchBar;
