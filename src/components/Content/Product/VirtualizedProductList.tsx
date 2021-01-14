import { useContext } from "react";
import { ApiContext } from "../../../api/context";
import SingleProduct from "./SingleProduct";
import { List } from "react-virtualized";
import { useWindowDimensions } from "../../../util";
import "./VirtualizedProductList.css";

const VirtualizedProductList = () => {
  const { state } = useContext(ApiContext);
  const { width, height } = useWindowDimensions();

  const itemHeight = 65;
  const listSize = !!state.response ? state.response.length : 0;

  if (state.error) {
    return (
      <div className="placeholder">
        <p>{state.error}</p>
      </div>
    );
  }

  return (
    <List
      className="products"
      width={width}
      height={height}
      autoWidth={true}
      rowHeight={itemHeight}
      rowCount={listSize}
      rowRenderer={({ index, key, style }) => {
        const product = state.response[index];
        return <SingleProduct product={product} style={style} key={key} />;
      }}
    />
  );
};
export default VirtualizedProductList;
