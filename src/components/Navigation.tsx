import { useContext } from "react";
import { ApiContext } from "../store";
import { Category, Nav } from "../types";
import { ReactComponent as LoadingIcon } from "./icons/Loading.svg";
import "./Navigation.css";

/**
 * Renders the category navigation list
 */
const Navigation = () => {
  const { state, set, loading } = useContext(ApiContext);

  const items: Nav.Item[] = [
    { text: "Beanies", category: Category.Beanies },
    { text: "Facemasks", category: Category.Facemasks },
    { text: "Gloves", category: Category.Gloves },
  ];

  const isActive = (item: Nav.Item) => state.category === item.category;

  return (
    <nav>
      <h2>Category</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i} className={`nav-item ${isActive(item) ? "active" : ""}`}>
            <a href="/#/" onClick={() => set(item.category)}>
              {item.text}
            </a>
            <span className="spinner">
              {loading && isActive(item) ? <LoadingIcon /> : null}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
