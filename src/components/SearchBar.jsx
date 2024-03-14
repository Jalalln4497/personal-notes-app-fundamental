import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search by title..."
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)} />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default SearchBar;
