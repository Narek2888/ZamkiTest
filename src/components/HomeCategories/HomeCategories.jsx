import React, { useEffect, useState } from "react";
import closePng from "../../assets/close.png";
import CategoriesItem from "./CategoriesItem";
import loadingImg from "./loading.png";
import "./HomeCategories.scss";

const HomeCategories = ({ navRef, closeMenuRef }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const url = "https://zamki-strapi.codium.pro/api/categories?populate=*";
    const data = await fetch(url).then((res) => res.json());
    setCategories((prev) => {
      const res = [...prev, ...data.data];
      return [...res];
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
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

      {loading && !categories.length && <img src={loadingImg} alt="loading" />}

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
