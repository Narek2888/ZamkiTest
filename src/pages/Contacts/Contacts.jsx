import React, { useState, useEffect } from "react";
import "./Contacts.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Layout from "../../Layout/Layout";
import { getDataObj } from "../../utils";

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
          <div
            dangerouslySetInnerHTML={{ __html: contact.contact_html }}
          ></div>
        </div>
        <Manufacturers />
      </div>
    </Layout>
  );
};

export default Contacts;
