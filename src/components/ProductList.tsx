import { useContext } from "react";
import { ApiContext } from "../store/api";
import SingleProduct from "./SingleProduct";
import "./ProductList.css";

const ProductList = () => {
  const { state, loading } = useContext(ApiContext);

  return (
    <div id="products">
      {loading ? <h1>loading...</h1> : null}
      {state.products.slice(0, 20).map((product, i) => (
        <SingleProduct key={i} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
