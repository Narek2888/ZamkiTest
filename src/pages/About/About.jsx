import React, { useEffect, useState } from "react";
import "./About.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Layout from "../../Layout/Layout";
import { getDataObj } from "../../utils";

const About = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    getDataObj("https://zamki-strapi.codium.pro/api/about", setAbout);
  }, []);

  return (
    <Layout>
      <div className="about">
        <HomeCategories />
        <div dangerouslySetInnerHTML={{ __html: about.about_html }}></div>
      </div>
      <Manufacturers />
    </Layout>
  );
};
export default About;
