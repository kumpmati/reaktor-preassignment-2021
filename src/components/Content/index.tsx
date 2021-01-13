import VirtualizedProductList from "./VirtualizedProductList";
import { useContext } from "react";
import { ApiContext } from "../../store";
import { Category } from "../../types";
import "./Content.css";

const Content = () => {
  const { state } = useContext(ApiContext);
  const empty = state.category === Category.None;

  return (
    <main id="content">
      {empty ? (
        <div className="placeholder">
          <p>Select category</p>
        </div>
      ) : (
        <VirtualizedProductList />
      )}
    </main>
  );
};
export default Content;
