import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, getNovinki } from "../../redux/features/shop/shopSlice";
import "./HomeSectionDown.scss";

const HomeSectionDown = ({ grid }) => {
  const dispatch = useDispatch();

  const { initialReqResult, searchResult, isSearching, novinki } = useSelector(
    (state) => state.shop
  );

  console.log({ novinki });
  useEffect(() => {
    dispatch(getItems());
    dispatch(getNovinki());
  }, []);

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
        {showItems?.map((item, index) => {
          const { id, attributes } = item;
          const { name, brand, category, images, price } = attributes;
          const url = images[0]?.image?.data?.attributes.url;
          return (
            <div className="homeCategories__categories__item" key={id}>
              <div className="homeCategories__categories__item__img">
                <img
                  src={`http://zamki-strapi.codium.pro/${url}`}
                  alt="categories_img"
                />
              </div>

              <div className="homeCategories__categories__item__description">
                <h4>{name}</h4>
                <p>{brand}</p>
                <p>{price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSectionDown;
