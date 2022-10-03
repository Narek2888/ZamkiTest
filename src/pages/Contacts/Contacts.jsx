import React, { useState, useEffect } from "react";
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
import { getDataObj } from "../../utils";

const Contacts = () => {
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    getDataObj("https://zamki-strapi.codium.pro/api/contact", setContacts);
  }, []);

  const {
    address: addresses,
    phoneNumber: phoneNumbers,
    messageNumber: messageNumbers,
    email: emails,
  } = contacts;

  console.log({ contacts });
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
            {addresses?.length ? (
              <div className="contact__section__discription__address">
                <FontAwesomeIcon icon={faLocationDot} />
                <div className="contact__section__discription__address__item">
                  {addresses?.map((item, idx) => {
                    return <p key={idx}>{item}</p>;
                  })}
                </div>
              </div>
            ) : null}

            <div className="contact__section__discription__contacts">
              {phoneNumbers?.length ? (
                <div className="contact__section__discription__contacts__phone">
                  <FontAwesomeIcon icon={faPhone} />
                  {phoneNumbers?.map((item, idx) => {
                    return <p key={idx}>{item}</p>;
                  })}
                </div>
              ) : null}
              {messageNumbers?.length ? (
                <div className="contact__section__discription__contacts__message">
                  <FontAwesomeIcon icon={faCommentDots} />
                  {messageNumbers.map((item, idx) => {
                    return <p key={idx}>{item}</p>;
                  })}
                </div>
              ) : null}
              {emails?.length ? (
                <div className="contact__section__discription__contacts__mail">
                  <FontAwesomeIcon icon={faEnvelope} />
                  {emails?.map((item, idx) => {
                    return <p key={idx}>{item}</p>;
                  })}
                </div>
              ) : null}
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
