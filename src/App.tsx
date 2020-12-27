import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import { ApiContext, useApi, initialData } from "./store";

const App = () => {
  const api = useApi(initialData);

  return (
    <ApiContext.Provider value={api}>
      <div className="App">
        <div id="sidebar">
          <h1 id="title">Wearhouse</h1>
          <Navigation />
        </div>
        <div id="content">
          <ProductList />
        </div>
      </div>
    </ApiContext.Provider>
  );
};

export default App;
