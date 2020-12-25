import { getProducts } from "../api";
import { Category } from "../types";

// test fetching with all categories
const categories = [Category.Beanies, Category.Facemasks, Category.Gloves];
for (let category of categories) {
  test(`fetching ${category} returns correct response`, async () => {
    const response = await getProducts(category);

    expect(response).toHaveProperty("category", category);
    expect(response).toHaveProperty("products");
  });
}
