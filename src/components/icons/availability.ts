import { Availability } from "../../types";

import { ReactComponent as InStockIcon } from "./InStock.svg";
import { ReactComponent as LessThan10Icon } from "./LessThan10.svg";
import { ReactComponent as OutOfStockIcon } from "./OutOfStock.svg";

const icons = {
  [Availability.InStock]: InStockIcon,
  [Availability.LessThan10]: LessThan10Icon,
  [Availability.OutOfStock]: OutOfStockIcon,
};

export default icons;
