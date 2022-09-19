import "./Slider.scss";
import React, { useEffect, useState, useRef, useMemo } from "react";

const FirstELement = () => {
  return (
    <div className="first__slide">
      <span className="first__slide__title">Новинки!</span>
      <span className="first__slide__txt">
        Высокое европейское качество из Португалии
      </span>
      <button className="first__slide__btn">Подробности акции</button>
    </div>
  );
};

const Slider = () => {
  const colors = useMemo(
    () => [<FirstELement />, <FirstELement />, <FirstELement />],
    []
  );
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
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index}>
            {backgroundColor}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
