import React from "react";
import { Link } from "react-router-dom";
import "./BasketSection.scss";
import image from "../HomeSectionUp/image/ruchki.png";
import { useSelector } from "react-redux";

const BasketSection = () => {
  const { totalAmount } = useSelector((state) => state.shop);

  const basketItem = [
    {
      name: "Дверные ручки-защелки",
      model: 'Крючок "Amig" модель 100.',
      material: "Материал крючка - металл.",
      price: 200,
      image: image,
    },
    {
      name: "Крючок Amig мод. 100 (черный)",
      model: 'Крючок "Amig" модель 100.',
      material: "Материал крючка - металл.",
      price: 480,
      image: image,
    },
    {
      name: "Дверные ручки-защелки",
      model: 'Крючок "Amig" модель 100.',
      material: "Материал крючка - металл.",
      price: 600,
      image: image,
    },
  ];

  return (
    <div className="basketSection">
      <div className="basketSection__text">Корзина</div>
      {/* <div className="basketSection__type">
        <div>Товары в корзине:</div>
        <button className="basketSection__type__done">Готовые к заказу </button>
        <button className="basketSection__type__delayed">
          Отложенные ({pcs}){" "}
        </button>
      </div> */}

      <div className="basketSection__items">
        {basketItem.map((item, index) => {
          const { name, model, material, price, image } = item;

          return (
            <div className="basketSection__items__item" key={index}>
              <div className="basketSection__items__item__close"></div>
              <div className="basketSection__items__item__img">
                <img src={image} alt="" />
              </div>
              <div className="basketSection__items__item__description">
                <div className="basketSection__items__item__description__name">
                  {name}
                </div>
                <div className="basketSection__items__item__description__model">
                  {model}
                </div>
                <div className="basketSection__items__item__description__material">
                  {material}
                </div>
                <div className="basketSection__items__item__description__price">
                  {price} Руб.
                </div>
                <div className="basketSection__items__item__description__count">
                  Кол-во <input type="number" name="count" id="" />
                </div>
                <div className="basketSection__items__item__description__postpone">
                  <div className="basketSection__items__item__description__postpone__text">
                    Отложить
                  </div>
                  <div className="basketSection__items__item__description__postpone__buyImg"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="basketSection__items__buy">
        <div className="basketSection__items__buy__total">
          Итого: {totalAmount} руб.
        </div>

        <Link to="/karzina/aformitzakaz">
          <div className="basketSection__items__buy__order">Оформить заказ</div>
        </Link>
      </div>
    </div>
  );
};

export default BasketSection;
