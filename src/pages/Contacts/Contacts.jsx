import React, { useState, useEffect } from "react";
import "./Contacts.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Path from "../../components/Path/Path";
import Layout from "../../Layout/Layout";
import { getDataObj } from "../../utils";
import Loader from "react-loader-spinner";

const Contacts = () => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    getDataObj("https://zamki-strapi.codium.pro/api/contact", setContact);
  }, []);

  return (
    <Layout>
      <div className="contact">
        <div className="contact__section">
          <HomeCategories />
          <Path name={"Контакты"}/>
          {contact.contact_html ? (
            <div
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
        <Manufacturers />
      </div>
    </Layout>
  );
};

export default Contacts;
