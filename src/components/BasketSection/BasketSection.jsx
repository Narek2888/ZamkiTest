import React, { useState } from "react";
import image from "../HomeSectionUp/image/ruchki.png";
import buyImg from "../../assets/basket.png";
import close from "../../assets/close.png";
import "./BasketSection.scss";

const BasketSection = () => {
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

  let pcs = basketItem.length;
  let totalPrice = 0;

  return (
    <div className="basketSection">
      <div className="basketSection__text">Корзина</div>
      <div className="basketSection__type">
        <div>Товары в корзине:</div>
        <div className="basketSection__type__done">Готовые к заказу </div>
        <div className="basketSection__type__delayed">Отложенные ({pcs}) </div>
      </div>

      <div className="basketSection__items">
        {basketItem.map((item, index) => {
          const { name, model, material, price, image } = item;

          totalPrice += price

          return (
            <div className="basketSection__items__item" key={index}>
              <div className="basketSection__items__item__close closeRed">
                <img src={close} alt="deleteItem" />
              </div>
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
                  <div className="basketSection__items__item__description__postpone__buyImg">
                    <img src={buyImg} alt="buyImg" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        </div>
        <div className="basketSection__items__buy">
          <div className="basketSection__items__buy__total">
            Итого: {totalPrice} руб.
          </div>
          <div className="basketSection__items__buy__order">Оформить заказ</div>
      </div>
    </div>
  );
};

export default BasketSection;
