import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="App__container"></div>
      <Switch><Route exact path="/" component={Home} /></Switch>
    </div>
  );
}

export default App;
