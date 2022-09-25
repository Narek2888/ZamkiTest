import React from "react";
import "./Partners.scss";
import image from "../../components/HomeSectionUp/image/ruchki.png";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Layout from "../../Layout/Layout";

const Partners = () => {
  const partnersItem = [
    {
      name: "Доводчики дверей",
      model: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "Ручки",
      model: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
  ];

  return (
    <Layout>
      <div className="partners">
        <HomeCategories />
        <div className="partners__section">
          <Manufacturers />
          <div className="partners__section__partners">
            <div className="partners__section__partners__text">
              Все категории производителя - Dorma
            </div>
            <div className="partners__section__partners__items">
              {partnersItem.map((item, index) => {
                return (
                  <div
                    className="partners__section__partners__items__item"
                    key={index}
                  >
                    <div className="partners__section__partners__items__item__img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="partners__section__partners__items__item__discription">
                      <h4>{item.name}</h4>
                      <p>{item.model}</p>
                      <p>{item.country}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
