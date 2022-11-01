import React, { useState, useEffect } from "react";
import "./Contacts.scss";
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

const Contacts = () => {
  const [contact, setContact] = useState({});
  const { searchResult, isSearching } = useSelector((state) => state.search);

  useDocumentTitle("Prozamki".concat(" | ", "Контакты"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeSearchResult());
    getDataObj("/contact", setContact);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="contact">
        <div className="contact__section">
          <HomeCategories />
          <div>
            <Path
              path={[
                { name: "Главная страница > ", to: "/" },
                { name: "Контакты", to: "/contacts" },
              ]}
            />
            {isSearching ? (
              <div className="homeCategories__categories ">
                {searchResult?.map((item, index) => {
                  return <SearchResult key={`${index}`} item={item} />;
                })}
              </div>
            ) : contact.contact_html ? (
              <div
                className="contact__html"
                dangerouslySetInnerHTML={{ __html: contact.contact_html }}
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

export default Contacts;
