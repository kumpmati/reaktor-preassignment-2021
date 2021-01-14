import { createContext, useState } from "react";
import { getProducts } from ".";
import { Api, Category } from "../types";

/**
 * Initial state of the product view
 */
const initialData: Api.Response = {
  category: Category.None,
  error: "",
  response: [],
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
export const useApi = (): Api.Hook => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(initialData);

  /**
   * Changes which category is visible
   * @param category Category to show
   */
  const set = async (category: Category) => {
    const timeoutError = setTimeout(() => {
      setLoading(false);
      alert("Something went wrong, try again.");
    }, 30 * 1000);

    setLoading(true);
    const response = await getProducts(category);
    setState(response);
    clearTimeout(timeoutError);
    setLoading(false);
  };

  return { state, loading, set };
};
