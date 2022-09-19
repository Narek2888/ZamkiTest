import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import times from "lodash/times";
import { nanoid } from "nanoid";

import image from "./image/manufacturer.png";
import "./Manufacturers.scss";

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
        <Marquee key={key} velocity={100} initDeg={0}>
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
