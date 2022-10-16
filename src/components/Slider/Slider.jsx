import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.scss";
import Loader from "react-loader-spinner";

const FirstELement = ({ item }) => {
  const { background_image, button, text, title } = item.attributes;
  return (
    <div
      className="first__slide"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <div
        className="first__slide__title"
        dangerouslySetInnerHTML={{ __html: title }}
      ></div>
      <div
        className="first__slide__txt"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
      {button ? (
        <button className="first__slide__btn">Подробности акции</button>
      ) : null}
    </div>
  );
};

const Slider = ({ categories }) => {
  return (
    <div className="slideshow">
      <div className="slideshowSlider">
        {categories.length ? (
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            zoom={false}
            loop={true}
          >
            {categories.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="slide">
                    <FirstELement item={item} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
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
    </div>
  );
};
export default Slider;
