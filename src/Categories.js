import React from "react";

const Categories = ({ category, handleCategory }) => {
  return (
    <li className="filter-btn" onClick={(e) => handleCategory(e)}>
      {category}
    </li>
  );
};
export default Categories;
