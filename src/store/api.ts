import { createContext, useState } from "react";
import { getProducts } from "../api";
import { Api, Category } from "../types";

/**
 * Initial state of the product view
 */
export const initialState: Api.Response = {
  category: Category.None,
  products: [],
};

/**
 * Consumed by the navigation and product list elements
 */
export const ApiContext = createContext<{
  state: Api.Response;
  loading: boolean;
  set: (c: Category) => Promise<void>;
}>({
  state: initialState,
  loading: false,
  set: async () => {},
});

/**
 * API wrapper to enable statefulness
 * @param initial Initial state of the data
 */
export const useApi = (initial: Api.Response) => {
  const [state, setState] = useState(initial);
  const [loading, setLoading] = useState(false);

  /**
   * Changes which category is visible
   * @param category Category to show
   */
  const set = async (category: Category) => {
    setLoading(true);
    setState(await getProducts(category));
    setLoading(false);
  };

  return { state, loading, set };
};
