import React from "react";
import { categories } from "../../data";
import "./Categories.css";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = () => {
  return (
    <div className="Categories-Container">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
