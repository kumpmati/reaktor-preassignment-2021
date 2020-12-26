import { Availability } from "../../types";
import InStockIcon from "./InStockIcon";
import LessThan10Icon from "./LessThan10Icon";
import OutOfStockIcon from "./OutOfStockIcon";

const options = {
  [Availability.InStock]: InStockIcon,
  [Availability.LessThan10]: LessThan10Icon,
  [Availability.OutOfStock]: OutOfStockIcon,
};

export default options;
