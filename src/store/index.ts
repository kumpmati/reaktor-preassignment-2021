import { createContext, useState } from "react";
import { getProducts } from "../api";
import { Api, Category } from "../types";

/**
 * Initial state of the product view
 */
export const initialData: Api.Response = {
  category: Category.None,
  products: [],
};

/**
 * Consumed by the navigation and product list elements
 */
export const ApiContext = createContext<Api.Context>({
  state: initialData,
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
    if (category === state.category) return;

    setLoading(true);
    setState(await getProducts(category));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return { state, loading, set };
};
