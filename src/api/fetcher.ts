import { Fetcher, Category } from "../types";

/**
 * Asynchronously sends a GET request to the /v2/products/:category endpoint
 * and returns its response, or null if the response is an error
 * @param {Category} category Product category
 * @returns {Promise<Fetcher.ProductEndpointResponse> | null}
 */
export const fetchProductsData = async (
  category: Category
): Promise<Fetcher.ProductEndpointResponse | null> => {
  return [];
};

/**
 * Asynchronously calls the /v2/products/:manufacturer endpoint
 * and returns its response, or null if the response is an error
 */
export const fetchAvailabilityData = async (
  manufacturer: string
): Promise<Fetcher.AvailabilityEndpointResponse | null> => {
  return {
    code: 200,
    response: [],
  };
};
