import React from "react";
import { Switch } from "react-router-dom";
import "./App.scss";
import { useRoutes } from "./routes/routes";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import { ErrorBoundary } from "./components/errorBoundary/ErrorBoundary";

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <NavBar />
      <ErrorBoundary>
        <Switch>{routes}</Switch>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
