import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Partners.scss";
import { getDataObj } from "../../utils";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Layout from "../../Layout/Layout";
import Path from "../../components/Path/Path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SearchResult from "../../components/SearchResult/SearchResult";
import PartnersItem from "./PartnersItem";

const Partners = () => {
  const { id } = useParams();

  const [partners, setPartners] = useState({});

  useEffect(() => {
    getDataObj(`/brands/${id}?populate=deep`, setPartners);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="partners">
        <Path
          path={[
            { name: "Главная страница > ", to: "/" },
            { name: "Производители > ", to: "/partners" },
            { name: `${partners.name}`, to: `${partners.id}` },
          ]}
        />
        <HomeCategories />
        <div className="partners__section">
          <div className="partners__section__partners">
            <div className="partners__section__partners__text">
              Все категории производителя - {partners.name}
            </div>
            <div className="partners__section__partners__items">
              {partners?.items?.data?.map((item, index) => {
                return <SearchResult item={item} key={index} />;
              })}
            </div>
          </div>

          <div className="partners__section__filter">
            <input
              type="text"
              className="partners__section__filter__input"
              placeholder="Поиск"
            />
            <div className="partners__section__filter__sort">
              <div>Сортировать </div>
              <div className="partners__section__filter__type">
                По типу
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              <div className="partners__section__filter__price">
                цене
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              <div className="partners__section__filter__withdraw">
                Выводить по
                <select name="" id="">
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">50</option>
                </select>
              </div>
            </div>
          </div>

          <div className="partners__section__items">
            {partners?.items?.data?.map((item, index) => {
              return (
                <PartnersItem key={index} item={item.attributes} id={item.id} />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
