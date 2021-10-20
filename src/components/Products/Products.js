import Product from "../Product/Product";
import "./Products.css";

const Products = ({ data }) => {
  return (
    <div className="Products-Container">
      {data.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
