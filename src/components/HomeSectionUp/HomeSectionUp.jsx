import React from "react";
import "./HomeSectionUp.scss";
import { EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeSectionUp = ({ items, handleSelect }) => {
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
                    handleSelect(item.nameEng);
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
