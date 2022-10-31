import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Path from "../../components/Path/Path";
import SearchResult from "../../components/SearchResult/SearchResult";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import Layout from "../../Layout/Layout";
import { removeSearchResult } from "../../redux/features/shop/searchSlice";
import { getDataObj } from "../../utils";
import "./About.scss";

const About = () => {
  const [about, setAbout] = useState({});
  const { searchResult, isSearching } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  useDocumentTitle("Prozamki".concat(" | ", "О компании"));

  useEffect(() => {
    dispatch(removeSearchResult());
    getDataObj("/about", setAbout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="about">
        <HomeCategories />
        <div>
          <Path
            path={[
              { name: "Главная страница > ", to: "/" },
              { name: "О компании", to: "/about" },
            ]}
          />

          {isSearching ? (
            <div className="homeCategories__categories ">
              {searchResult?.map((item, index) => {
                return <SearchResult key={`${index}`} item={item} />;
              })}
            </div>
          ) : about.about_html ? (
            <div dangerouslySetInnerHTML={{ __html: about.about_html }}></div>
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
export default About;
