import { Switch } from "react-router-dom";
import "./App.scss";
import { useRoutes } from "./routes/routes";
import Layout from "./Layout/Layout";
import Footer from "./components/Footer/Footer";
import NavBar2 from "./components/Navabar2/NavBar2";

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <NavBar2 />
      <Layout>
        <Switch>{routes}</Switch>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
