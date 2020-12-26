import { useContext } from "react";
import { ApiContext } from "../store/api";
import { Category, Nav } from "../types";
import "./Navigation.css";

/**
 * Renders the category navigation list
 */
const Navigation = () => {
  const { state, set } = useContext(ApiContext);

  const items: Nav.Item[] = [
    { text: "Beanies", category: Category.Beanies },
    { text: "Facemasks", category: Category.Facemasks },
    { text: "Gloves", category: Category.Gloves },
  ];

  return (
    <nav>
      <h2>Category</h2>
      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            className={`nav-item ${
              state.category === item.category ? "active" : ""
            }`}>
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
