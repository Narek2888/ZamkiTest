import React from "react";
import { Switch } from "react-router-dom";
import "./App.scss";
import { useRoutes } from "./routes/routes";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <NavBar />
      <Switch>{routes}</Switch>
      <Footer />
    </div>
  );
}

export default App;
