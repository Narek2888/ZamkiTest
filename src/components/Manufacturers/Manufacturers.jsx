import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./Manufacturers.scss";
import Marquee from "react-fast-marquee";

const Manufacturers = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [key, setKey] = useState(nanoid());

  const getData = async () => {
    const url = "https://zamki-strapi.codium.pro/api/brands?populate=*";
    const data = await fetch(url).then((res) => res.json());
    setManufacturers((prev) => {
      const res = [...prev, ...data.data];
      return [...res];
    });
  };

  useEffect(() => {
    getData();
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
