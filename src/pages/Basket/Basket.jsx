import React from "react";
import "./Basket.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import BasketSection from "../../components/BasketSection/BasketSection";
import Manufacturers from "../../components/Manufacturers/Manufacturers";

const Basket = () => {
  return (
    <div>
      <div className="basket">
        <HomeCategories />
        <BasketSection />
      </div>
      <Manufacturers />
    </div>
  );
};

export default Basket;
