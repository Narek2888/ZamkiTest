import React from "react";
import "./HomeSection.scss";
import HomeSectionDown from "../HomeSectionDown/HomeSectionDown";

const HomeSection = ({ grid }) => {
  return (
    <div className="homeSection">
      <HomeSectionDown grid={grid} />
    </div>
  );
};
export default HomeSection;
