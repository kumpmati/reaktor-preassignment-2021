import "./Symbols.css";

import { ReactComponent as InStock } from "./icons/InStock.svg";
import { ReactComponent as OutOfStock } from "./icons/OutOfStock.svg";
import { ReactComponent as LessThan10 } from "./icons/LessThan10.svg";

const Symbols = () => {
  return (
    <ul id="symbols">
      <li>
        <p>In stock</p>
        <span className="icon">
          <InStock />
        </span>
      </li>
      <li>
        <p>Less than 10</p>
        <span className="icon">
          <LessThan10 />
        </span>
      </li>
      <li>
        <p>Out of stock</p>
        <span className="icon">
          <OutOfStock />
        </span>
      </li>
    </ul>
  );
};

export default Symbols;
