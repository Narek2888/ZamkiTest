import React from "react";
import "./New.scss";
import HomeSection from "../../components/HomeSection/HomeSection";
import Layout from "../../Layout/Layout";
import Path from "../../components/Path/Path";

const New = () => {
  return (
    <Layout>
      <div className="new">
        <Path name={"Новинки"} />
        <HomeSection grid />
      </div>
    </Layout>
  );
};

export default New;
