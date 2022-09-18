import React from "react";
import "./Basket.scss"
import HomeCategories from '../../components/HomeCategories/HomeCategories'
import BasketSection from "../../components/BasketSection/BasketSection";

const Basket = () => {

  return (
    <div  className="basket">
      <HomeCategories />
      <BasketSection />
    </div>
  );
};

export default Basket;
