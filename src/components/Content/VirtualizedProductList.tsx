import { useContext } from "react";
import { ApiContext } from "../../store";
import SingleProduct from "./SingleProduct";
import { List } from "react-virtualized";
import "./VirtualizedProductList.css";

const VirtualizedProductList = () => {
  const { state } = useContext(ApiContext);

  const itemHeight = 65;
  const listSize = !!state.response ? state.response.length : 0;

  if (state.error) {
    return (
      <div>
        <h1>{state.error}</h1>
      </div>
    );
  }

  return (
    <List
      className="products"
      width={2000}
      height={1000}
      autoWidth={true}
      rowHeight={itemHeight}
      rowCount={listSize}
      rowRenderer={({ index, key, style }) => {
        const product = state.response[index];
        return (
          <div className="product" style={style} key={key}>
            <SingleProduct {...product} />
          </div>
        );
      }}
    />
  );
};
export default VirtualizedProductList;
