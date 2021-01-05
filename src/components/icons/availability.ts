import { createElement } from "react";
import { Availability } from "../../types";

import { ReactComponent as InStockIcon } from "./InStock.svg";
import { ReactComponent as LessThan10Icon } from "./LessThan10.svg";
import { ReactComponent as OutOfStockIcon } from "./OutOfStock.svg";

export const getAvailabilityIcon = (status: string) => {
  switch (status) {
    case Availability.InStock:
      return createElement(InStockIcon);
    case Availability.LessThan10:
      return createElement(LessThan10Icon);
    case Availability.OutOfStock:
      return createElement(OutOfStockIcon);
    default:
      return null;
  }
};
