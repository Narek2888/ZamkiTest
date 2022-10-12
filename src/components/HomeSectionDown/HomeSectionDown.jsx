import React from "react";
import image from "./image/petli.png";
import "./HomeSectionDown.scss";

const HomeSectionDown = ({ grid }) => {
  const categories = [
    {
      name: "КРЮЧКИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ПЕТЛИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "КРЮЧКИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ПЕТЛИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "КРЮЧКИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
    {
      name: "ПЕТЛИ",
      patcat: "Крючки",
      country: "Amig (Испания)",
      img: image,
    },
  ];
  return (
    <div className="homeCategories">
      <div className="homeCategories__text">КАТЕГОРИИ</div>

      <div
        className={`homeCategories__categories ${
          grid ? "news__page__categories" : ""
        }`}
      >
        {categories.map((item, index) => {
          const { img, name, patcat, country } = item;
          return (
            <div className="homeCategories__categories__item" key={index}>
              <div className="homeCategories__categories__item__img">
                <img src={img} alt="categories_img" />
              </div>

              <div className="homeCategories__categories__item__description">
                <h4>{name}</h4>
                <p>{patcat}</p>
                <p>{country}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSectionDown;
