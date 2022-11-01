import React from "react";
import "./Basket.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import BasketSection from "../../components/BasketSection/BasketSection";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import Layout from "../../Layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeSearchResult } from "../../redux/features/shop/searchSlice";

const Basket = () => {
  const dispatch = useDispatch();
  useDocumentTitle("Prozamki".concat(" | ", "Козина"));

  useEffect(() => {
    dispatch(removeSearchResult());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div>
        <div className="basket">
          <HomeCategories />
          <BasketSection />
        </div>
        <Manufacturers />
      </div>
    </Layout>
  );
};

export default Basket;
