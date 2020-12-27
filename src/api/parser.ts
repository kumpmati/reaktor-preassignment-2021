import { Availability, Fetcher, Parser, Product } from "../types";

/**
 * Combines product data with availability data
 * @param {Fetcher.ProductEndpointResponse} products Array of products
 * @param {Fetcher.AvailabilityEndpointResponse} availabilities Array of availabilities of different manufacturers
 * @returns {Parser.Response}
 */
export const parseData = async (
  products: Fetcher.ProductEndpointResponse,
  availabilities: Fetcher.AvailabilityEndpointResponse[]
): Promise<Parser.Response> => {
  const avs = [
    Availability.InStock,
    Availability.LessThan10,
    Availability.OutOfStock,
  ];

  const finalProducts = products.map(p => {
    const product: Product = {
      ...p,
      availability: avs[~~(Math.random() * 3)],
    };
    return product;
  });

  return finalProducts;
};
