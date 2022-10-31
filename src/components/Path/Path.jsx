import React from "react";
import { Link } from "react-router-dom";
import "./Path.scss";

const Path = ({ path }) => {
  return (
    <div className="path__box">
      {path?.length &&
        path.map((item) => {
          const { to, name } = item;
          return (
            <div key={`${path} - ${name}`}>
              {to ? (
                <Link to={to} className="path rest">
                  {/* {name} */}
                  {name.length < 20 ? name : `${name.slice(0,20)}...`}
                </Link>
              ) : (
                <span className="path rest"> {name}</span>
              )}
            </div>
          );
        })}
    </div>
  );
};
export default Path;
