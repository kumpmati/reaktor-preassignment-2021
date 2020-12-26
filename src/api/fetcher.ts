import beanies from "../mocks/beanies.json";
import facemasks from "../mocks/facemasks.json";
import gloves from "../mocks/gloves.json";
import { Fetcher, Category, Product } from "../types";
const BASE_URL = "https://bad-api-assignment.reaktor.com/v2";

/**
 * Asynchronously sends a GET request to the /v2/products/:category endpoint
 * and returns its response, or null if the response is an error
 * @param {Category} category Product category
 * @returns {Promise<Fetcher.ProductEndpointResponse> | null}
 */
export const fetchProductsData = async (
  category: Category
): Promise<Fetcher.ProductEndpointResponse> => {
  //const data = await fetch(`${BASE_URL}/products/${category}`);
  switch (category) {
    default:
    case Category.Beanies:
      return beanies as Product[];

    case Category.Facemasks:
      return facemasks as Product[];

    case Category.Gloves:
      return gloves as Product[];
  }
};

/**
 * Asynchronously calls the /v2/products/:manufacturer endpoint
 * and returns its response, or null if the response is an error
 */
export const fetchAvailabilityData = async (
  manufacturer: string
): Promise<Fetcher.AvailabilityEndpointResponse> => {
  return [];
};
