import React, { useEffect, useState } from "react";
import "./Paying.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Layout from "../../Layout/Layout";
import { getDataObj } from "../../utils";

const Paying = () => {
  const [paying, setPaying] = useState({});

  useEffect(() => {
    getDataObj("https://zamki-strapi.codium.pro/api/payment", setPaying);
  }, []);

  return (
    <Layout>
      <div>
        <div className="paying">
          <HomeCategories />
          <div dangerouslySetInnerHTML={{ __html: paying.payment_html }}></div>
        </div>
        <Manufacturers />
      </div>
    </Layout>
  );
};

export default Paying;
