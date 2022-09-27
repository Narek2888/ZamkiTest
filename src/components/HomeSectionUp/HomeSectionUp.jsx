import React from "react";
import image from "./image/ruchki.png";
import "./HomeSectionUp.scss";
import { EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeSectionUp = () => {
  const items = [
    {
      name: "ЗАМКИ",
      img: image,
      id: 0,
    },
    {
      name: "РУЧКИ",
      img: image,
      id: 1,
    },
    {
      name: "ПЕТЛИ",
      img: image,
      id: 2,
    },

    {
      name: "Двери",
      img: image,
      id: 3,
    },
    {
      name: "Броненакладки",
      img: image,
      id: 4,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      img: image,
      id: 5,
    },

    {
      name: "ЗАМКИ",
      img: image,
      id: 6,
    },
    {
      name: "РУЧКИ",
      img: image,
      id: 7,
    },
    {
      name: "ПЕТЛИ",
      img: image,
      id: 8,
    },

    {
      name: "Двери",
      img: image,
      id: 9,
    },
    {
      name: "Броненакладки",
      img: image,
      id: 10,
    },
    {
      name: "ЦИЛИНДРОВЫЕ МЕХАНИЗМЫ",
      img: image,
      id: 11,
    },
    // {
    //   name: "Автопороги",
    //   img: image,
    //   id: 6,
    // }
  ];

  return (
    <div className="items">
      {items.length <= 6 ? (
        items.map((item) => {
          const { name, id } = item;
          return (
            <div key={id} className="items__item">
              <div className="items__item__img">
                <img src={item.img} alt="alt" />
              </div>
              <div className="items__item__name">
                {name.length < 9 ? name : name.slice(0, 9) + "..."}
              </div>
            </div>
          );
        })
      ) : (
        <Swiper
          modules={EffectFade}
          spaceBetween={50}
          slidesPerView={6}
          zoom={false}
          loop={true}
        >
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div
                  className="items__item"
                  onClick={() => {
                    console.log("click");
                  }}
                >
                  <div className="items__item__img">
                    <img src={item.img} alt="item" />
                  </div>
                  <div className="items__item__name">
                    {item.name.length < 9
                      ? item.name
                      : item.name.slice(0, 9) + "..."}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};
export default HomeSectionUp;
