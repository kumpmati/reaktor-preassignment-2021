import { Api, Category } from "../types";
import { fetchProductsData } from "./fetcher";

/**
 * Fetches data from the backend API and parses it to an easy to use format
 * @param {Category} category Category of the products to fetch
 * @returns {Api.Response} Parsed products
 */
export const getProducts = async (
  category: Category
): Promise<Api.Response> => {
  const products = await fetchProductsData(category);

  const manufacturers = products
    ? [...new Set(products.map(product => product.manufacturer))]
    : [];

  return { category, products: [] };
};
