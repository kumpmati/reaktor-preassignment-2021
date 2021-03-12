import { ApiContext, useApi } from "./api/context";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import WebSocketHandler from "./components/WebSocketHandler/WebSocketHandler";

const App = () => {
  const api = useApi();
  WebSocketHandler();

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
