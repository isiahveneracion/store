import React, { children } from "react";

const SearchBar = () => {
  return (
    <div>
      <input type="text" />
      <div>
        <input type="checkbox" />
        Only show products in stock
      </div>
    </div>
  );
};

export default SearchBar;
