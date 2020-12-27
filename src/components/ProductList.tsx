import { useContext } from "react";
import { ApiContext } from "../store";
import SingleProduct from "./SingleProduct";
import "./ProductList.css";

const ProductList = () => {
  const { state } = useContext(ApiContext);

  return (
    <div id="products">
      {state.products.slice(0, 20).map((product, i) => (
        <SingleProduct key={i} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
