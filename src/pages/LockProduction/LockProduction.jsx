import React, { useEffect, useState } from "react";
import "./LockProduction.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Path from "../../components/Path/Path";
import Layout from "../../Layout/Layout";
import { getDataObj } from "../../utils";
import Loader from "react-loader-spinner";

const LockProduction = () => {
  const [lockProduction, setLockProduction] = useState({});

  useEffect(() => {
    getDataObj(
      "https://zamki-strapi.codium.pro/api/lock-production",
      setLockProduction
    );
  }, []);
  return (
    <Layout>
      <div>
        <div className="paying">
          <HomeCategories />
          <div>
            <Path path={{ name: "Изготовление ключи", to: "/oplata" }} />
            {paying.payment_html?.length ? (
              <div
                dangerouslySetInnerHTML={{ __html: paying.payment_html }}
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
      </div>
    </Layout>
  );
};

export default LockProduction;
