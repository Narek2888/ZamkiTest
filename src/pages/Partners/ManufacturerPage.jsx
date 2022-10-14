import React, { useEffect, useState } from "react";
import "./ManufacturerPage.scss";
import { getData } from "../../utils";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Layout from "../../Layout/Layout";

const ManufacturerPage = () => {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    getData(
      "https://zamki-strapi.codium.pro/api/brands?populate=*",
      setManufacturers
    );
  }, []);

  return (
    <Layout>
      <div className="manufacturerPage">
        <HomeCategories />
        <div className="manufacturerPage__items">
          {manufacturers.map((item, index ) => {
            const { attributes } = item.attributes.logo.data[0];
            const { url } = attributes;

            return (
              <div key={index} className="manufacturerPage__items__item">
                <img
                  className="manufacturerPage__items__item__img"
                  src={`https://zamki-strapi.codium.pro/${url}`}
                  alt="brand"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ManufacturerPage;
