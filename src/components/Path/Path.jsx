import React from "react";
import "./Path.scss";

const Path = ({ name }) => {
  return (
    <div className="path">{name ? `Главная страница > ${name}` : null}</div>
  );
};
export default Path;
