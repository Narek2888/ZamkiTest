import { useEffect, useState } from "react";
import closePng from "../../assets/close.png";
import CategoriesItem from "./CategoriesItem";
import "./HomeCategories.scss";

const HomeCategories = ({ navRef, closeMenuRef }) => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const url = "http://zamki-strapi.codium.pro/api/categories?populate=*";
    const data = await fetch(url).then((res) => res.json());
    setCategories((prev) => {
      const res = [...prev, ...data.data];
      return [...res];
    });
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

      {categories.length &&
        categories.map((i) => {
          const { id, attributes } = i;
          return <CategoriesItem attributes={attributes} id={id} key={id} />;
        })}
    </div>
  );
};

export default HomeCategories;
