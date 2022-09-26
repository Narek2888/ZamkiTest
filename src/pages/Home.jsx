import React, { useState, useEffect } from "react";
import HomeCategories from "../components/HomeCategories/HomeCategories";
import HomeSection from "../components/HomeSection/HomeSection";
import Manufacturers from "../components/Manufacturers/Manufacturers";
import Slider from "../components/Slider/Slider";

import "./Home.scss";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const url = "http://zamki-strapi.codium.pro/api/sliders";
    const data = await fetch(url).then((res) => res.json());
    setCategories(() => {
      const res = [...data.data];
      return [...res];
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Slider categories={categories} />

      <div className="main">
        <div className="homePage">
          <HomeCategories />
          <HomeSection />
        </div>
        <Manufacturers />
      </div>
    </>
  );
};

export default Home;
