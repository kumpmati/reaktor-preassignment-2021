import { Api, Category } from "../types";
const API_URL = process.env.REACT_APP_API_URL;

/**
 * Fetches data from the backend API
 * @param {Category} category Category of the products to fetch
 * @returns {Api.Response} Response containing the requested category and products
 */
export const getProducts = async (
  category: Category
): Promise<Api.Response> => {
  const url = `${API_URL}/api/products/${category}`;
  const payload = await (await fetch(url)).json();

  return { category, products: payload.success ? payload.response : [] };
};
