import React, { useEffect, useState } from "react";
import "./Delivery.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Path from "../../components/Path/Path";
import Layout from "../../Layout/Layout";
import { getDataObj } from "../../utils";
import Loader from "react-loader-spinner";

const Delivery = () => {
  const [delivery, setDelivery] = useState({});

  useEffect(() => {
    getDataObj("https://zamki-strapi.codium.pro/api/delivery", setDelivery);
  }, []);
  return (
    <Layout>
      <div className="delivery">
        <HomeCategories />
        <div>
          <Path path={{ name: "Доставка", to: "/dostavka" }} />
          {delivery.delivery_html ? (
            <div
              dangerouslySetInnerHTML={{ __html: delivery.delivery_html }}
            ></div>
          ) : (
            <Loader
              type="TailSpin"
              color="#16CED4"
              height={50}
              width={50}
              timeout={10000}
            />
          )}
        </div>
      </div>
      <Manufacturers />
    </Layout>
  );
};

export default Delivery;
