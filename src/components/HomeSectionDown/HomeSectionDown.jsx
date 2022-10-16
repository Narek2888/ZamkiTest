import React from "react";
import { useSelector } from "react-redux";
import "./HomeSectionDown.scss";

const HomeSectionDown = ({ grid }) => {
  const { initialReqResult, searchResult, isSearching } = useSelector(
    (state) => state.shop
  );

  const showItems = isSearching ? searchResult : initialReqResult;

  return (
    <div className="homeCategories">
      <div className="homeCategories__text">КАТЕГОРИИ</div>
      {isSearching ? (
        searchResult.length > 0 ? (
          <p>По вышему запрросу мы нашли:</p>
        ) : (
          <p>По вышему запрросу нечего не нашли:</p>
        )
      ) : null}
      <div
        className={`homeCategories__categories ${
          grid ? "news__page__categories" : ""
        }`}
      >
        {showItems.map((item, index) => {
          const { img, name, patcat, country } = item;
          return (
            <div className="homeCategories__categories__item" key={index}>
              <div className="homeCategories__categories__item__img">
                <img src={img} alt="categories_img" />
              </div>

              <div className="homeCategories__categories__item__description">
                <h4>{name}</h4>
                <p>{patcat}</p>
                <p>{country}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSectionDown;
