import { useContext } from "react";
import { ApiContext } from "../store";
import SingleProduct from "./SingleProduct";
import "./ProductList.css";

const ProductList = () => {
  const { state } = useContext(ApiContext);
  const notEmpty = state.products.length !== 0;

  return (
    <ol id="products">
      {notEmpty &&
        state.products.map((product, i) => (
          <SingleProduct key={i} {...product} />
        ))}
    </ol>
  );
};

export default ProductList;
