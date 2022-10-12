import React, { useEffect, useState } from "react";
import "./Delivery.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Layout from "../../Layout/Layout";
import { getDataObj } from "../../utils";

const Delivery = () => {
  const [delivery, setDelivery] = useState({});

  useEffect(() => {
    getDataObj("https://zamki-strapi.codium.pro/api/delivery", setDelivery);
  }, []);
  return (
    <Layout>
      <div className="delivery">
        <HomeCategories />
        <div dangerouslySetInnerHTML={{ __html: delivery.delivery_html }}></div>
      </div>
      <Manufacturers />
    </Layout>
  );
};

export default Delivery;
