import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Layout from "../../Layout/Layout";
import Path from "../../components/Path/Path";
import "./ManufacturerPage.scss";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import SearchResult from "../../components/SearchResult/SearchResult";
import { useDispatch } from "react-redux";
import { removeSearchResult } from "../../redux/features/shop/searchSlice";

const ManufacturerPage = () => {
  const { brandsLogo } = useSelector((state) => state.shop);
  const { searchResult, isSearching } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeSearchResult());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDocumentTitle("Prozamki".concat(" | ", "Производители"));

  return (
    <Layout>
      <div className="manufacturerPage">
        <HomeCategories />
        <div>
          <Path
            path={[
              { name: "Главная страница > ", to: "/" },
              { name: "Производители", to: "/partners" },
            ]}
          />
          <div className="manufacturerPage__items">
            {isSearching ? (
              <div className="homeCategories__categories ">
                {searchResult?.map((item, index) => {
                  return <SearchResult key={`${index}`} item={item} />;
                })}
              </div>
            ) : brandsLogo.length ? (
              brandsLogo.map((item, index) => {
                const { attributes } = item.attributes.logo.data[0];
                const { url } = attributes;
                const { id } = item;

                return (
                  <Link
                    to={`/manufacture/${id}`}
                    key={index}
                    className="manufacturerPage__items__item"
                  >
                    <img
                      className="manufacturerPage__items__item__img"
                      src={`https://zamki-strapi.codium.pro/${url}`}
                      alt="brand"
                    />
                  </Link>
                );
              })
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManufacturerPage;
