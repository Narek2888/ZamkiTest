import React from "react";
import { Link } from "react-router-dom";
import "./Path.scss";

const Path = ({ path }) => {
  const { name, to } = path;
  return (
    <div className="path__box">
      <Link to={"/"} className="path">
        {name ? `Главная страница > ` : null}
      </Link>
      <Link to={to} className="path rest">
        {name}
      </Link>
    </div>
  );
};
export default Path;
