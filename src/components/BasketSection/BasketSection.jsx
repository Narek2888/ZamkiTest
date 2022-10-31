import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Path from "../Path/Path";
import BasketItem from "./BasketItem";
import "./BasketSection.scss";
import basketImg from "../../assets/basketimg.svg";
import SearchResult from "../SearchResult/SearchResult";

const BasketSection = () => {
  const { totalAmount, card } = useSelector((state) => state.card);
  const { searchResult, isSearching } = useSelector((state) => state.search);

  return (
    <div className="basketSection">
      <Path
        path={[
          { name: "Главная страница > ", to: "/" },
          { name: "Корзина", to: "/basket" },
        ]}
      />
      <div className="basketSection__text">Корзина</div>

      {isSearching ? (
        <div className="homeCategories__categories ">
          {searchResult?.map((item, index) => {
            return <SearchResult key={`${index}`} item={item} />;
          })}
        </div>
      ) : card.length ? (
        <>
          <div className="basketSection__items">
            {card.map((item, index) => {
              return <BasketItem {...item} key={index} />;
            })}
          </div>
          <div className="basketSection__items__buy">
            <div className="basketSection__items__buy__total">
              Итого: {totalAmount} руб.
            </div>

            <Link to="/basket/aformitzakaz">
              <div className="basketSection__items__buy__order">
                Оформить заказ
              </div>
            </Link>
          </div>
        </>
      ) : (
        <div className="basket_is_empty">
          <span>В корзине не пока товаров</span>
          <img src={basketImg} alt="" />
        </div>
      )}
    </div>
  );
};

export default BasketSection;
