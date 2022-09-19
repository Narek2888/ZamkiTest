import React from "react";
import HomeCategories from "../components/HomeCategories/HomeCategories";
import HomeSection from "../components/HomeSection/HomeSection";
import Manufacturers from "../components/Manufacturers/Manufacturers";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="homePage">
        <HomeCategories />
        <HomeSection />
      </div>
      <Manufacturers />
    </div>
  );
};

export default Home;
