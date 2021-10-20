import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useHistory, useParams } from "react-router";
import { popularProducts } from "../../data";
import { useGlobalContext } from "../../context";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const product = popularProducts.find((product) => product.id === Number(id));
  const { addCart } = useGlobalContext();
  const handleAdd = () => {
    addCart({
      id: product.id,
      name: product.name,
      img: product.img,
      amount: 1,
      price: product.price,
    });
  };
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="ProductDetails-Wrapper">
        <div className="ProductDetails-ImgContainer">
          <img className="ProductDetails-Image" src={product.img} alt="" />
        </div>
        <div className="ProductDetails-InfoContainer">
          <h1 className="ProductDetails-Title">{product.name}</h1>
          <p className="ProductDetails-Desc">
            {product.desc ||
              "Fruits and vegetables are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes."}
          </p>
          <span className="ProductDetails-Price">₹. {product?.price}</span>
          <br />
          <br />
          <div className="ProductDetails-AddContainer">
            <button
              className="ProductDetails-Button"
              onClick={() => history.push("/productList")}
            >
              CONTINUE SHOPPING
            </button>
            <button className="ProductDetails-Button" onClick={handleAdd}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
