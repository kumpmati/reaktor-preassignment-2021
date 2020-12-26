import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import { ApiContext, useApi, initialState } from "./store/api";

const App = () => {
  const api = useApi(initialState);

  return (
    <ApiContext.Provider value={api}>
      <div className="App">
        <div id="sidebar">
          <h1>Warehouser</h1>
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
