import React, { useEffect, useState } from "react";
// import Marquee from "react-marquee-slider";
import times from "lodash/times";
import { nanoid } from "nanoid";

import image from "./image/manufacturer.png";
import "./Manufacturers.scss";
import Marquee from "react-fast-marquee";

const Manufacturers = () => {
  const manufacturers = [
    {
      img: image,
    },
    {
      img: image,
    },
    {
      img: image,
    },
    {
      img: image,
    },
    {
      img: image,
    },
    {
      img: image,
    },
  ];

  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, []);

  return (
    <div className="manufacturers">
      <div className="manufacturers__text">Производители</div>

      <div className="manufacturers__logo">
        <Marquee key={key} gradientColor={false}>
          {times(6, Number).map((id, i) => (
            <div key={i} className="carusels">
              <img
                className="carusel-img"
                src={manufacturers[id].img}
                key={`logo-${id}`}
                alt=""
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Manufacturers;
