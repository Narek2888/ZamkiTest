import { useEffect, useState } from "react";
import closePng from "../../assets/close.png";
import dropdownPng from "../../assets/dropdown.png";
import "./HomeCategories.scss";

const HomeCategories = ({navRef, closeMenuRef}) => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const url = "http://192.168.16.105:1337/api/categories";
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
  navRef.current.classList.remove("width")
}

  return (
    <div ref={navRef} className={"categories"}>
      <div ref={closeMenuRef} className={"hide"}>
        <div className="text">КАТЕГОРИИ</div>
        <div className="close" onClick={closeNavbar}>
          <img src={closePng} alt="closeMenu" />
        </div>
      </div>

      {categories.map((i) => {
        const { id, attributes } = i;
        const { item } = attributes;
        return (
          <div className="categories__item" key={id}>
            {item}
            <img
              src={dropdownPng}
              alt="dropdown"
              className="categories__item__dropdown"
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomeCategories;



