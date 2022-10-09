import React, { useState, useEffect } from "react";
import HomeCategories from "../components/HomeCategories/HomeCategories";
import HomeSection from "../components/HomeSection/HomeSection";
import Manufacturers from "../components/Manufacturers/Manufacturers";
import Slider from "../components/Slider/Slider";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { getData } from "../utils";

import "./Home.scss";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useDocumentTitle("Prozamki".concat(" | ", "Основная"));

  useEffect(() => {
    getData("https://zamki-strapi.codium.pro/api/sliders", setCategories);
  }, []);

  return (
    <>
      <Slider categories={categories} />

      <div className="main">
        <div className="homePage">
          {/* <HomeCategories /> */}
          <HomeSection />
        </div>
        <Manufacturers />
      </div>
    </>
  );
};

export default Home;
