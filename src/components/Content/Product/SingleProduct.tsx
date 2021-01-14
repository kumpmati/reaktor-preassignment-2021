import { Product } from "../../../types";
import { getAvailabilityIcon } from "../../icons/availability";
import "./SingleProduct.css";

/**
 * Renders a single product
 * @param props
 */
const SingleProduct = ({
  product,
  style,
}: {
  product: Product;
  style: React.CSSProperties;
}) => {
  const { name, type, manufacturer, price, color, availability } = product;

  return (
    <div className="product" style={style}>
      <span className="product-availability">
        {getAvailabilityIcon(availability)}
      </span>
      <span className="main-info">
        <h1>{name}</h1>
        <h2>{manufacturer}</h2>
      </span>

      <span className="extra-info">
        <h3>{price} €</h3>
        <p>
          Color: <b>{color.join(", ")}</b>
        </p>
        <p>
          Type: <b>{type}</b>
        </p>
      </span>
    </div>
  );
};

/*
const arePropsEqual = (
  prev: Readonly<Product>,
  next: Readonly<Product>
): boolean => prev.id === next.id && prev.availability === next.availability;
*/

export default SingleProduct;
