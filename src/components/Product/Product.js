import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../context";
import "./Product.css";

const Product = ({ item }) => {
  const history = useHistory();
  const { addCart } = useGlobalContext();

  const handleAdd = () => {
    addCart({
      id: item.id,
      name: item.name,
      img: item.img,
      amount: 1,
      price: item.price,
    });
  };
  return (
    <div className="Product-Container">
      <div className="Product-Circle" />
      <img
        className="Product-Image"
        src={item?.img || ""}
        alt={item?.img || item?.name}
      />
      <div className="Product-Info">
        <div className="Product-Icon">
          <ShoppingCartOutlined onClick={handleAdd} />
        </div>
        <p className="Product-ProductName">{item.name}</p>
        <div className="Product-Icon">
          <SearchOutlined onClick={() => history.push(`/product/${item.id}`)} />
        </div>
      </div>
    </div>
  );
};

export default Product;
