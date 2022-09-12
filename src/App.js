import { Switch } from "react-router-dom";
import "./App.scss";
import { useRoutes } from "./routes/routes";

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <div className="App__container"></div>
      <Switch>{routes}</Switch>
    </div>
  );
}

export default App;
