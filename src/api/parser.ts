import { Fetcher, Parser } from "../types";

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
  return [];
};
