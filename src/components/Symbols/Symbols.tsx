import { getAvailabilityIcon } from "../icons/availability";
import { Availability } from "../../types";
import "./Symbols.css";

const Symbols = () => {
  return (
    <ul id="symbols">
      <li>
        <p>In stock</p>
        <span className="icon">
          {getAvailabilityIcon(Availability.InStock)}
        </span>
      </li>
      <li>
        <p>Less than 10</p>
        <span className="icon">
          {getAvailabilityIcon(Availability.LessThan10)}
        </span>
      </li>
      <li>
        <p>Out of stock</p>
        <span className="icon">
          {getAvailabilityIcon(Availability.OutOfStock)}
        </span>
      </li>
    </ul>
  );
};

export default Symbols;
