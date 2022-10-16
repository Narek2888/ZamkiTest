import React from "react";
import { Switch } from "react-router-dom";
import "./App.scss";
import { useRoutes } from "./routes/routes";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import { ErrorBoundary } from "./components/errorBoundary/ErrorBoundary";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBrandsLogo, getCategories } from "./redux/features/shop/shopSlice";

function App() {
  const routes = useRoutes();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrandsLogo());
  });

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
