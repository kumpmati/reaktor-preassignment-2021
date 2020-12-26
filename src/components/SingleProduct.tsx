import { createElement, memo } from "react";
import { Product } from "../types";
import AvailabilityIcons from "./icons/availability";
import "./SingleProduct.css";

/**
 * Renders a single product's info
 * @param {Product} props
 */
const SingleProduct = ({ name, manufacturer, availability }: Product) => {
  const icon = createElement(AvailabilityIcons[availability]);

  return (
    <div className="product">
      <span className="product-availability">{icon}</span>
      <span className="product-info">
        <h1>{name}</h1>
        <h2>{manufacturer}</h2>
      </span>
    </div>
  );
};

const arePropsEqual = (
  prev: Readonly<Product>,
  next: Readonly<Product>
): boolean => prev.id === next.id && prev.availability === next.availability;

// export memoized component
export default memo(SingleProduct, arePropsEqual);
