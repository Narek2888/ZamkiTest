import React from "react";
import "./Delivery.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Layout from "../../Layout/Layout";

const Delivery = () => {
  return (
    <Layout>
      <div className="delivery">
        <HomeCategories />
      </div>
      <Manufacturers />
    </Layout>
  );
};

export default Delivery;
