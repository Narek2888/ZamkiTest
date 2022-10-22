import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataObj } from "../../utils";
import "./HomePageItem.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Layout from "../../Layout/Layout";
import Path from "../../components/Path/Path";
import BrandLogo from "../HomePageItem/dorma.png";

const HomePageItem = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    getDataObj(`https://zamki-strapi.codium.pro/api/items/${id}`, setItem);
  }, []);

  return (
    <Layout>
      <div className="ditatePage">
        <Path name={item.name} />
        <HomeCategories />

        <div className="ditatePage__item">
          <h1>{item.name}</h1>
          <div className="ditatePage__item__bio">
            <div className="ditatePage__item__bio__data">
              <div className="ditatePage__item__bio__data__img">
                {/* <img src={item.image} alt="" /> */}
              </div>
              <div className="ditatePage__item__bio__data__description1">
                <div className="ditatePage__item__bio__data__price__brandLogo">
                  <img src={BrandLogo} alt="" />
                </div>
                <p className="ditatePage__item__bio__data__description1__text">
                  {item.category} <br />
                  {item.subcategory}
                </p>
                <div className="ditatePage__item__bio__data__description1__price">
                  {item.price} Руб.
                </div>
                <div className="ditatePage__item__bio__data__description1__count">
                  Кол-во <input type="number" name="count" id="" />
                </div>
                <div className="ditatePage__item__bio__data__description1__postpone">
                  <div className="ditatePage__item__bio__data__description1__postpone__text">
                    В корзину
                  </div>
                  <div className="ditatePage__item__bio__data__description1__postpone__buyImg"></div>
                </div>

                <div className="ditatePage__item__bio__data__description1__color">
                  <button className="ditatePage__item__bio__data__description1__color__white"></button>
                  <button className="ditatePage__item__bio__data__description1__color__black"></button>
                  <button className="ditatePage__item__bio__data__description1__color__red"></button>
                </div>
              </div>
            </div>
            <div className="ditatePage__item__bio__description2">
              <h3>Характеристики</h3>
              <h4>Технические характеристики:</h4>
              <p className="ditatePage__item__bio__description2__desc">
              {item.description}
              </p>
              <br /> <br />
              <h4>Описание</h4>
              <p>
                Блок подключения BSH. RT01.06 электронно-механического замка
                Rotaror SMART Lock предназначен для подсоединения к реле " Умный
                дом".
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePageItem;
