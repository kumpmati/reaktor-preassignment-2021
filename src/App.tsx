import { ApiContext, useApi, initialData } from "./store";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const App = () => {
  const api = useApi(initialData);

  return (
    <ApiContext.Provider value={api}>
      <div className="App">
        <Sidebar />
        <Content />
      </div>
    </ApiContext.Provider>
  );
};

export default App;
