import { Availability } from "../../types";
import InStockIcon from "./InStockIcon";
import LessThan10Icon from "./LessThan10Icon";
import OutOfStockIcon from "./OutOfStockIcon";
import UnknownIcon from "./UnknownIcon";

export default {
  [Availability.InStock]: InStockIcon,
  [Availability.LessThan10]: LessThan10Icon,
  [Availability.OutOfStock]: OutOfStockIcon,
};
