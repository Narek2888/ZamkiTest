import React, { useEffect, useState } from "react";
import "./HomeSection.scss";
import HomeSectionUp from "../HomeSectionUp/HomeSectionUp";
import HomeSectionDown from "../HomeSectionDown/HomeSectionDown";
import image from "./image/ruchki.png";

const HomeSection = ({ grid, showCarousel = false }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const items = [
    {
      name: "ЗАМКИ",
      img: image,
      nameEng: "zamki",
      id: 0,
    },
    {
      name: "РУЧКИ",
      img: image,
      nameEng: "ruchki",
      id: 1,
    },
    {
      name: "ПЕТЛИ",
      img: image,
      nameEng: "petli",
      id: 2,
    },

    {
      name: "Двери",
      img: image,
      nameEng: "dveri",
      id: 3,
    },
    {
      name: "Броненакладки",
      img: image,
      nameEng: "bron",
      id: 4,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      img: image,
      nameEng: "cilindr",
      id: 5,
    },

    {
      name: "ЗАМКИ",
      img: image,
      nameEng: "zamki",
      id: 6,
    },
    {
      name: "Броненакладки",
      img: image,
      nameEng: "bron",
      id: 10,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      img: image,
      nameEng: "cilindr",
      id: 11,
    },
  ];

  const handleSelect = (sleectedCategory) => {
    setSelectedCategory(sleectedCategory);
  };

  useEffect(() => {
    if (selectedCategory) {
      console.log(`Cuyc tal ${selectedCategory} uxarkac`);
    } else {
      console.log("cuyc tal pa umalchanyu");
    }
  }, [selectedCategory]);

  return (
    <div className="homeSection">
      {showCarousel && (
        <>
          <div className="homeSection__categories__news">
            <div>КАТЕГОРИИ</div>
            <div>НОВИНКИ</div>
          </div>

          <HomeSectionUp items={items} handleSelect={handleSelect} />
        </>
      )}
      <HomeSectionDown grid={grid} />
    </div>
  );
};
export default HomeSection;
