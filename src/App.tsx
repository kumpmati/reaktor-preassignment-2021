import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import Symbols from "./components/Symbols";
import LoadingIcon from "./components/LoadingIcon";
import { ApiContext, useApi, initialData } from "./store";

const App = () => {
  const api = useApi(initialData);
  const { loading, state } = api;

  return (
    <ApiContext.Provider value={api}>
      <div className="App">
        <aside id="sidebar">
          <section id="title">
            <h1>Wearhouse</h1>
          </section>
          <section id="category">
            <div>
              <h2>Category</h2>
              {loading && <LoadingIcon />}
            </div>
            <Navigation />
          </section>
          <section>
            <h2>Symbols</h2>
            <Symbols />
          </section>
        </aside>
        <main id="content">
          {state.error && <h2>{state.error}</h2>}
          <ProductList />
        </main>
      </div>
    </ApiContext.Provider>
  );
};

export default App;
