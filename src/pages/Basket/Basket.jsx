import React from "react";
import "./Basket.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import BasketSection from "../../components/BasketSection/BasketSection";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Layout from "../../Layout/Layout";

const Basket = () => {
  return (
    <Layout>
      <div>
        <div className="basket">
          <HomeCategories />
          <BasketSection />
        </div>
        <Manufacturers />
      </div>
    </Layout>
  );
};

export default Basket;
