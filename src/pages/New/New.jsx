import React from "react";
import "./New.scss";
import HomeSection from "../../components/HomeSection/HomeSection";
import Layout from "../../Layout/Layout";
import Path from "../../components/Path/Path";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeSearchResult } from "../../redux/features/shop/searchSlice";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const New = () => {
  const dispatch = useDispatch();

  useDocumentTitle("Prozamki".concat(" | ", "Новинки"));

  useEffect(() => {
    dispatch(removeSearchResult());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="new">
        <Path
          path={[
            { name: "Главная страница > ", to: "/" },
            { name: "Новинки", to: "/novinki" },
          ]}
        />
        <HomeSection grid />
      </div>
    </Layout>
  );
};

export default New;
