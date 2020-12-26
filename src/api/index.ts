import { Api, Category, Fetcher } from "../types";
import { fetchAvailabilityData, fetchProductsData } from "./fetcher";
import { parseData } from "./parser";

const getPromiseValue = (
  p: PromiseSettledResult<Fetcher.AvailabilityEndpointResponse>
) => (p.status === "fulfilled" ? p.value : []);

/**
 * Fetches data from the backend API and parses it to an easy to use format
 * @param {Category} category Category of the products to fetch
 * @returns {Api.Response} Parsed products
 */
export const getProducts = async (
  category: Category
): Promise<Api.Response> => {
  const rawProducts = await fetchProductsData(category);

  // get list of unique manufacturers
  const manufacturers = [
    ...new Set(rawProducts?.map(product => product.manufacturer) || []),
  ];

  const availabilities = (
    await Promise.allSettled(manufacturers.map(fetchAvailabilityData))
  ).map(getPromiseValue);

  const products = await parseData(rawProducts, availabilities);
  return { category, products };
};
