import "./HomeCategories.scss";
import dropdownPng from "../../assets/dropdown.png";
import closePng from "../../assets/close.png";
import { useState } from "react";

const HomeCategories = ({ setActive, active }) => {
  const [close, setClose] = useState(active);
  const categoriesItem = [
    "Замки",
    "Ручки",
    "Петли",
    "Крючки",
    "Броненакладки",
    "Броненакладки",
    " Дверная фурнитура",
    " Доводчики дверей",
    " Фурнитура к раздвижным дверям",
    " Фурнитура для стеклянных дверей",
    " Перекодировочные ключи",
    "Оконная и ПВХ фурнитура",
    "Мебельная фурнитура",
    "Кронштейны",
  ];

  const handleClose = (e) => {
    e.stopPropagation();
    e.prevenDeafault();
    setActive((prevState) => !prevState);
    setClose(!close);
  };

  return (
    <div className={active ? "activeMenu" : close ? "hide" : "categories"}>
      <div className={active ? "closeMenu" : "hide"}>
        <div className="text">КАТЕГОРИИ</div>
        <div className={"close"}>
          <img src={closePng} alt="closeMenu" onClick={handleClose} />
        </div>
      </div>

      {categoriesItem.map((item, index) => {
        return (
          <div className="categories__item" key={index}>
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
