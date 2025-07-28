import React from "react";

function Filter({ selectedCategory, onCategoryChange, search, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}  // FIX: Must be 'search'
        onChange={onSearchChange}
      />
      <select name="filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
