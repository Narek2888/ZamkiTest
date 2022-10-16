import React from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import closePng from "../../assets/close.png";
import CategoriesItem from "./CategoriesItem";
import "./HomeCategories.scss";

const HomeCategories = ({ navRef, closeMenuRef }) => {
  const { categories } = useSelector((state) => state.shop);

  const closeNavbar = () => {
    navRef.current.classList.remove("width");
  };

  return (
    <div ref={navRef} className="categories">
      <div ref={closeMenuRef} className={"hide"}>
        <div className="text">КАТЕГОРИИ</div>
        <div className="close" onClick={closeNavbar}>
          <img src={closePng} alt="closeMenu" />
        </div>
      </div>

      {categories.length ? (
        categories.map((i) => {
          const { id, attributes } = i;
          return <CategoriesItem attributes={attributes} id={id} key={id} />;
        })
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
  );
};

export default HomeCategories;
