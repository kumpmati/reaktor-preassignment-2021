import { useContext } from "react";
import { ApiContext } from "../store";
import SingleProduct from "./SingleProduct";
import "./ProductList.css";

const ProductList = () => {
  const { state } = useContext(ApiContext);
  const isEmpty = state.products.length === 0;

  return (
    <ol id="products">
      {!isEmpty
        ? state.products.map((product, i) => (
            <SingleProduct key={i} {...product} />
          ))
        : null}
    </ol>
  );
};

export default ProductList;
