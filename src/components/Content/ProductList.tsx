import { useContext } from "react";
import { ApiContext } from "../../store";
import SingleProduct from "./SingleProduct";
import "./ProductList.css";

const ProductList = () => {
  const { state } = useContext(ApiContext);
  const notEmpty = !!state.response;

  return (
    <ol id="products">
      {notEmpty
        ? state.response.map((product, i) => (
            <SingleProduct key={i} {...product} />
          ))
        : null}
    </ol>
  );
};

export default ProductList;
