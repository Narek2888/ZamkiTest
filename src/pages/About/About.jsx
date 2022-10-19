import React, { useEffect, useState } from "react";
import "./About.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Layout from "../../Layout/Layout";
import { getDataObj } from "../../utils";
import Loader from "react-loader-spinner";
import Path from "../../components/Path/Path";

const About = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    getDataObj("https://zamki-strapi.codium.pro/api/about", setAbout);
  }, []);

  return (
    <Layout>
      <div className="about">
        <HomeCategories />
        <div>
          <Path path={{ name: "О компании", to: "/about" }} />
          {about.about_html ? (
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
