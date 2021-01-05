import { useContext } from "react";
import { ApiContext } from "../store";
import { Category, Nav } from "../types";
import "./Navigation.css";

/**
 * Navigation items
 */
const items: Nav.Item[] = [
  { text: "Beanies", category: Category.Beanies },
  { text: "Facemasks", category: Category.Facemasks },
  { text: "Gloves", category: Category.Gloves },
];

/**
 * Renders the category navigation list
 */
const Navigation = () => {
  const { state, set } = useContext(ApiContext);

  const isActive = (item: Nav.Item) => state.category === item.category;

  return (
    <nav>
      <ul>
        {items.map((item, i) => (
          <li key={i} className={`nav-item ${isActive(item) ? "active" : ""}`}>
            <a href="/#/" onClick={() => set(item.category)}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
