import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import { ApiContext, useApi, initialData } from "./store";

const App = () => {
  const api = useApi(initialData);

  return (
    <ApiContext.Provider value={api}>
      <div className="App">
        <aside id="sidebar">
          <section>
            <h1 id="title">Wearhouse</h1>
          </section>
          <section>
            <Navigation />
          </section>
        </aside>
        <main id="content">
          <ProductList />
        </main>
      </div>
    </ApiContext.Provider>
  );
};

export default App;
