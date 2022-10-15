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

  const partnersFilterItem = [
    {
      name: "Доводчики дверей",
      model: 'Крючок "Amig" модель 100.',
      material: "Материал крючка - металл.",
      price: 200,
      image: image,
    },
    {
      name: "Доводчики дверей",
      model: 'Крючок "Amig" модель 100.',
      material: "Материал крючка - металл.",
      price: 480,
      image: image,
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

          <div className="partners__section__type">
            <div>Сортировать </div>
            <button className="partners__section__type__done">По типу</button>
            <button className="partners__section__type__delayed">Названию</button>
          </div>

          <div className="partners__section__items">
            {partnersFilterItem.map((item, index) => {
              const { name, model, material, price, image } = item;

              return (
                <div className="partners__section__items__item" key={index}>
                  <div className="partners__section__items__item__img">
                    <img src={image} alt="" />
                  </div>
                  <div className="partners__section__items__item__description">
                    <div className="partners__section__items__item__description__name">
                      {name}
                    </div>
                    <div className="partners__section__items__item__description__model">
                      {model}
                    </div>
                    <div className="partners__section__items__item__description__material">
                      {material}
                    </div>
                    <div className="partners__section__items__item__description__price">
                      {price} Руб.
                    </div>
                    <div className="partners__section__items__item__description__count">
                      Кол-во <input type="number" name="count" id="" />
                    </div>
                    <div className="partners__section__items__item__description__postpone">
                      <div className="partners__section__items__item__description__postpone__text">
                        В корзину
                      </div>
                      <div className="partners__section__items__item__description__postpone__buyImg">
                        {/* <img src={buyImg} alt="buyImg" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
