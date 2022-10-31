import React from "react";
import { useDispatch } from "react-redux";

import {
  addToCard,
  deleteFromCard,
  reduceItemCount,
} from "../../redux/features/shop/cardSlice";

const BasketItem = ({ name, model, material, price, img, count, id }) => {
  const dispatch = useDispatch();

  const handleDeleteFromCard = () => {
    dispatch(deleteFromCard({ id, count, price, img }));
  };

  const onAdd = () => {
    dispatch(addToCard({ name, price, id, img, count: 1 }));
  };
  const onReduce = () => {
    dispatch(reduceItemCount({ price, id, img }));
  };

  return (
    <div className="basketSection__items__item">
      <div
        className="basketSection__items__item__close"
        onClick={handleDeleteFromCard}
      ></div>
      <div className="basketSection__items__item__img">
        <img src={`https://zamki-strapi.codium.pro/${img?.url}`} alt="itemimg" />
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
          Кол-во <input type="number" name="count" value={count} readOnly />
          <div className="basketSection__items__item__description__postpone">
            <div className="basketSection__items__item__description__postpone__text">
              <span onClick={onReduce} className="minus">
                -
              </span>
              <span onClick={onAdd} className="plus">
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
