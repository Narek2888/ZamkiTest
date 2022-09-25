import React, { useEffect, useState, useRef } from "react";
import "./Slider.scss";

const FirstELement = ({ item }) => {
  const { background_image, button, text, title } = item.attributes;
  return (
    <div
      className="first__slide"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <span className="first__slide__title">{title}</span>
      <span className="first__slide__txt">{text}</span>
      {button ? (
        <button className="first__slide__btn">Подробности акции</button>
      ) : null}
    </div>
  );
};

const Slider = ({ categories }) => {
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === categories?.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {categories.map((item) => {
          return (
            <div className="slide" key={item.id}>
              <FirstELement item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Slider;
