import React, { useEffect, useState } from "react";
import "./Delivery.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Path from "../../components/Path/Path";
import Layout from "../../Layout/Layout";
import { getDataObj } from "../../utils";
import Loader from "react-loader-spinner";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useDispatch, useSelector } from "react-redux";
import SearchResult from "../../components/SearchResult/SearchResult";
import { removeSearchResult } from "../../redux/features/shop/searchSlice";

const Delivery = () => {
  const [delivery, setDelivery] = useState({});
  const { searchResult, isSearching } = useSelector((state) => state.search);

  useDocumentTitle("Prozamki".concat(" | ", "Доставка"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeSearchResult());
    getDataObj("/delivery", setDelivery);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className="delivery">
        <HomeCategories />
        <div>
          <Path
            path={[
              { name: "Главная страница > ", to: "/" },
              { name: "Доставка", to: "/delivery" },
            ]}
          />
          {isSearching ? (
            <div className="homeCategories__categories ">
              {searchResult?.map((item, index) => {
                return <SearchResult key={`${index}`} item={item} />;
              })}
            </div>
          ) : delivery.delivery_html ? (
            <div
              dangerouslySetInnerHTML={{ __html: delivery.delivery_html }}
            ></div>
          ) : (
            <Loader
              type="TailSpin"
              color="#16CED4"
              height={50}
              width={50}
              timeout={10000}
            />
          )}
        </div>
      </div>
      <Manufacturers />
    </Layout>
  );
};

export default Delivery;
