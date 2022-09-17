import React from "react";
import Slider from "../components/Slider/Slider";
import HomeCategories from "../components/HomeCategories/HomeCategories";
import HomeSection from "../components/HomeSection/HomeSection";
import Manufacturers from "../components/Manufacturers/Manufacturers";

import './Home.scss'

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="homePage">
        <HomeCategories />
        <HomeSection />
      </div>
        <Manufacturers />
    </div>
  );
};

export default Home;
