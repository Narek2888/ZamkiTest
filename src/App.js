import { Switch } from "react-router-dom";
import "./App.scss";
import { useRoutes } from "./routes/routes";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./Layout/Layout";
import Footer from "./components/Footer/Footer";

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <Navbar />
      <Layout>
        <Switch>{routes}</Switch>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
