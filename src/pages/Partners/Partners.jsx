import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Partners.scss";
import { getDataObj } from "../../utils";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Layout from "../../Layout/Layout";
import Path from "../../components/Path/Path";
import image from "./image/ruchki.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Partners = () => {
  const { id } = useParams();

  const [partners, setPartners] = useState({});

  useEffect(() => {
    getDataObj(
      `https://zamki-strapi.codium.pro/api/brands/${id}?populate`,
      setPartners
    );
  }, []);

  ///////////

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

  ////////////////////////

  return (
    <Layout>
      <div className="partners">
        <Path name={`Производители > ${partners.name}`} />
        <HomeCategories />
        {/* <h1 style={{ textAlign: "center" }}>{partners.name}</h1> */}

        <div className="partners__section">
          <div className="partners__section__partners">
            <div className="partners__section__partners__text">
              Все категории производителя - {partners.name}
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

          <div className="partners__section__filter">
            <input
              type="text"
              className="partners__section__filter__input"
              placeholder="Поиск"
            />
            <div className="partners__section__filter__sort">
              <div>Сортировать </div>
              <div className="partners__section__filter__type">
                По типу
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              <div className="partners__section__filter__price">
                цене
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              <div className="partners__section__filter__withdraw">
                Выводить по
                <select name="" id="">
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">50</option>
                </select>
              </div>
            </div>
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
                      <div className="partners__section__items__item__description__postpone__buyImg"></div>
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
