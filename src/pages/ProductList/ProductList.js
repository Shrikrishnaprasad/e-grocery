import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import { popularProducts } from "../../data";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState(popularProducts);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("new");

  useEffect(() => {
    setProducts((preproducts) =>
      popularProducts.filter((product) => {
        if (filter !== "All") {
          return product.category === filter;
        } else {
          return popularProducts;
        }
      })
    );
    if (sort === "desc") {
      setProducts((prev) => {
        return prev.sort((a, b) => Number(b.price) - Number(a.price));
      });
    } else if (sort === "asc") {
      setProducts((prev) => {
        return prev.sort((a, b) => Number(a.price) - Number(b.price));
      });
    }
  }, [filter, sort]);

  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className="ProductList-Title">Products</h1>
      <div className="ProductList-FilterContainer">
        <div className="ProductList-Filter">
          <span className="ProductList-FilterText">Filter Products:</span>
          <select
            className="ProductList-Select"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option className="ProductList-Option" selected value="All">
              All Categories
            </option>
            <option className="ProductList-Option" value="fruit">
              Fruits
            </option>
            <option className="ProductList-Option" value="vegetable">
              Vegetables
            </option>
            <option className="ProductList-Option" value="spices">
              Spices
            </option>
          </select>
        </div>
        <div className="ProductList-Filter">
          <span className="ProductList-FilterText">Sort Products:</span>
          <select
            className="ProductList-Select"
            onChange={(e) => setSort(e.target.value)}
          >
            <option className="ProductList-Option" selected value="new">
              Newest
            </option>
            <option className="ProductList-Option" value="asc">
              Price (asc)
            </option>
            <option className="ProductList-Option" value="desc">
              Price (desc)
            </option>
          </select>
        </div>
      </div>
      <Products data={products} />
      <Footer />
    </div>
  );
};

export default ProductList;
