import { memo } from "react";
import { Product } from "../../types";
import { getAvailabilityIcon } from "../Icons/availability";
import "./SingleProduct.css";

/**
 * Renders a single product's info
 * @param {Product} props
 */
const SingleProduct = ({
  name,
  manufacturer,
  availability,
  price,
  type,
  color,
}: Product) => {
  return (
    <>
      <span className="product-availability">
        {getAvailabilityIcon(availability)}
      </span>
      <span className="main-info">
        <h1>{name}</h1>
        <h2>{manufacturer}</h2>
      </span>
      <span className="extra-info">
        <p>
          <b>{price} €</b>
        </p>
        <p>
          Color: <b>{color.join(", ")}</b>
        </p>
        <p>
          Type: <b>{type}</b>
        </p>
      </span>
    </>
  );
};

const arePropsEqual = (
  prev: Readonly<Product>,
  next: Readonly<Product>
): boolean => prev.id === next.id && prev.availability === next.availability;

// export memoized component
export default memo(SingleProduct, arePropsEqual);
