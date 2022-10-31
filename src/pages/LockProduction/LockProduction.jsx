import React, { useEffect, useState } from "react";
import "./LockProduction.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Path from "../../components/Path/Path";
import Layout from "../../Layout/Layout";
import { getDataObj } from "../../utils";
import Loader from "react-loader-spinner";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useSelector } from "react-redux";
import SearchResult from "../../components/SearchResult/SearchResult";
import { useDispatch } from "react-redux";
import { removeSearchResult } from "../../redux/features/shop/searchSlice";

const LockProduction = () => {
  const [lockProduction, setLockProduction] = useState({});
  useDocumentTitle("Prozamki".concat(" | ", "Изготовление ключей"));
  const { searchResult, isSearching } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeSearchResult());
    getDataObj(
      "/lock-production",
      setLockProduction
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div>
        <div className="lockProduction">
          <HomeCategories />
          <div>
            <Path
              path={[
                { name: "Главная страница > ", to: "/" },
                { name: "Изготовление ключей", to: "/key-manufacture" },
              ]}
            />
            {isSearching ? (
              <div className="homeCategories__categories ">
                {searchResult?.map((item, index) => {
                  return <SearchResult key={`${index}`} item={item} />;
                })}
              </div>
            ) : lockProduction.production_information?.length ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: lockProduction.production_information,
                }}
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
      </div>
    </Layout>
  );
};

export default LockProduction;
