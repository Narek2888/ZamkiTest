import React from "react";
import "./Contacts.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faCommentDots,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Layout from "../../Layout/Layout";
import Map from "./Map";

const Contacts = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="contact__section">
          <HomeCategories />
          <div className="contact__section__discription">
            <div className="contact__section__discription__name">Контакты</div>
            <div className="contact__section__discription__title">
              Адреса наших розничных магазинов (схемы проезда ниже):
            </div>
            <div className="contact__section__discription__address">
              <FontAwesomeIcon icon={faLocationDot} />
              <div className="contact__section__discription__address__item">
                <p>
                  ТСЯ "Славянский мир" - магазин "А-11/6" замки, фурнитура и
                  домофоны
                </p>
                <p> ТК "Конструктор" - магазин "Г-2.9" замки и фурнитура</p>
                <p>
                  ТСК "Молоток" - магазин "Б-12" замки, фурнитура, двери и
                  домофоны
                </p>
              </div>
            </div>

            <div className="contact__section__discription__contacts">
              <div className="contact__section__discription__contacts__phone">
                <FontAwesomeIcon icon={faPhone} />
                <p>747-888-7777</p>
              </div>
              <div className="contact__section__discription__contacts__message">
                <FontAwesomeIcon icon={faCommentDots} />
                <p>747-244-8398</p>
              </div>
              <div className="contact__section__discription__contacts__mail">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>order@почта,.com</p>
              </div>
            </div>
            <div className="contact__section__discription__map">
              <Map />
            </div>
          </div>
        </div>
        <Manufacturers />
      </div>
    </Layout>
  );
};

export default Contacts;
