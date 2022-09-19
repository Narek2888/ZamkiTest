import { useEffect, useState } from "react";
import closePng from "../../assets/close.png";
import dropdownPng from "../../assets/dropdown.png";
import "./HomeCategories.scss";

const HomeCategories = ({ setActive, active }) => {
  const [close, setClose] = useState(active);
  const [categories, setCategories] = useState([]);

  const handleClose = (e) => {
    e.stopPropagation();
    e.prevenDeafault();
    setActive((prevState) => !prevState);
    setClose(!close);
  };

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

  return (
    <div className={active ? "activeMenu" : close ? "hide" : "categories"}>
      <div className={active ? "closeMenu" : "hide"}>
        <div className="text">КАТЕГОРИИ</div>
        <div className={"close"}>
          <img src={closePng} alt="closeMenu" onClick={handleClose} />
        </div>
      </div>

      {categories.map((item) => {
        const { id, attributes } = item;
        const { item: name } = attributes;
        return (
          <div className="categories__item" key={id}>
            {name}
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
