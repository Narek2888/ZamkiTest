import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNovinki } from "../../redux/features/shop/shopSlice";
import {
  removeSearchResult,
  getItems,
} from "../../redux/features/shop/searchSlice";

import "./HomeSectionDown.scss";

const HomeSectionDown = ({ grid }) => {
  const dispatch = useDispatch();

  const { novinki } = useSelector((state) => state.shop);

  const { searchResult, isSearching, initialReqResult } = useSelector(
    (state) => {
      return state.search;
    }
  );

  useEffect(() => {
    dispatch(getItems());
    dispatch(getNovinki());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inNovinkiPage = window.location.pathname === "/new";

  function renderItems() {
    if (isSearching) {
      return searchResult;
    } else {
      if (inNovinkiPage && !isSearching) {
        return novinki;
      } else {
        return initialReqResult;
      }
    }
  }

  const showItems = renderItems();

  const handleInital = () => {
    dispatch(removeSearchResult());
  };

  return (
    <div className="homeCategories">
      <div className="homeCategories__text" onClick={handleInital}>
        КАТЕГОРИИ
      </div>
      {isSearching ? (
        searchResult.length > 0 ? (
          <p className="homeCategories__info">По вышему запросу мы нашли:</p>
        ) : (
          <p className="homeCategories__info">
            По вышему запросу нечего не нашли:
          </p>
        )
      ) : null}

      <div
        className={`homeCategories__categories ${
          grid ? "news__page__categories" : ""
        }`}
      >
        {showItems?.map((item, index) => {
          const { id, attributes } = item;
          const { name, images, price } = attributes;
          const url = images?.length
            ? images[0]?.image?.data?.attributes.url
            : "";

          const prettyName = name.slice(0, 30);

          return (
            <Link
              to={`/homepage/${id}`}
              className="homeCategories__categories__item"
              key={`${id}-${index}`}
            >
              <div className="homeCategories__categories__item__img">
                {item.attributes.new ? <div className="newicon">NEW</div> : ""}
                <img
                  src={`http://zamki-strapi.codium.pro/${url}`}
                  alt="categories_img"
                />
              </div>

              <div className="homeCategories__categories__item__description">
                <h4>{prettyName}...</h4>
                <p>{price} руб</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSectionDown;
