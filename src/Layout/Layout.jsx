import React from "react";
import "./Layout.scss";

const Layout = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Layout;
