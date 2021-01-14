import { ApiContext, useApi, initialData } from "./store";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

const App = () => {
  const api = useApi(initialData);

  return (
    <div className="App">
      <ApiContext.Provider value={api}>
        <Sidebar />
        <Content />
      </ApiContext.Provider>
    </div>
  );
};

export default App;
