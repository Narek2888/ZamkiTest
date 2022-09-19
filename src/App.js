import { Switch } from "react-router-dom";
import "./App.scss";
import { useRoutes } from "./routes/routes";
import Layout from "./Layout/Layout";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <NavBar />
      <Slider />
      <Layout>
        <Switch>{routes}</Switch>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
