import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./Manufacturers.scss";
import Marquee from "react-fast-marquee";
import { getData } from "../../utils";

const Manufacturers = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    getData(
      "https://zamki-strapi.codium.pro/api/brands?populate=*",
      setManufacturers
    );
    setKey(nanoid());
  }, []);

  return (
    <div className="manufacturers">
      <div className="manufacturers__text">Производители</div>

      <div className="manufacturers__logo">
        <Marquee key={key} gradientColor={false}>
          {manufacturers.map((item) => {
            const { attributes } = item.attributes.logo.data[0];
            const { url } = attributes;

            return (
              <div key={nanoid()} className="carusels">
                <img
                  className="carusel-img"
                  src={`https://zamki-strapi.codium.pro/${url}`}
                  alt="brand"
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Manufacturers;
