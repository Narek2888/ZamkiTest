import React, { useEffect, useState } from "react";
import closePng from "../../assets/close.png";
import CategoriesItem from "./CategoriesItem";
import "./HomeCategories.scss";
import { getData } from "../../utils";

const HomeCategories = ({ navRef, closeMenuRef }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData(
      "https://zamki-strapi.codium.pro/api/categories?populate=*",
      setCategories
    );
  }, []);

  const closeNavbar = () => {
    navRef.current.classList.remove("width");
  };

  return (
    <div ref={navRef} className={"categories"}>
      <div ref={closeMenuRef} className={"hide"}>
        <div className="text">КАТЕГОРИИ</div>
        <div className="close" onClick={closeNavbar}>
          <img src={closePng} alt="closeMenu" />
        </div>
      </div>

      {categories.length
        ? categories.map((i) => {
            const { id, attributes } = i;
            return <CategoriesItem attributes={attributes} id={id} key={id} />;
          })
        : null}
    </div>
  );
};

export default HomeCategories;
