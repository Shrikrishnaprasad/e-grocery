import React from "react";
import { useHistory } from "react-router";
import "./CategoryItem.css";

const CategoryItem = ({ item }) => {
  const history = useHistory();
  return (
    <div className="CategoryItem-Container">
      <img className="CategoryItem-Image" src={item.img} alt={item.img} />
      <div className="CategoryItem-Info">
        <h2 className="CategoryItem-Title">{item.title}</h2>
        <button
          className="CategoryItem-Button"
          onClick={() => history.push("/productList")}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
