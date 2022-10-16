import React from "react";
import "./ManufacturerPage.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Layout from "../../Layout/Layout";
import { useSelector } from "react-redux";

const ManufacturerPage = () => {
  const { brandsLogo } = useSelector((state) => state.shop);

  return (
    <Layout>
      <div className="manufacturerPage">
        <HomeCategories />
        <div className="manufacturerPage__items">
          {brandsLogo.length
            ? brandsLogo.map((item, index) => {
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
              })
            : null}
        </div>
      </div>
    </Layout>
  );
};

export default ManufacturerPage;
