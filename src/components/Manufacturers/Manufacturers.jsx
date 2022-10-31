import { nanoid } from "nanoid";
import React from "react";
import Marquee from "react-fast-marquee";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import "./Manufacturers.scss";

const Manufacturers = () => {
  const { brandsLogo } = useSelector((state) => state.shop);

  return (
    <div className="manufacturers">
      <div className="manufacturers__text">Производители</div>

      <div className="manufacturers__logo">
        {brandsLogo.length ? (
          <Marquee key={nanoid()} gradientColor={false}>
            {brandsLogo.map((item) => {
              const { attributes } = item.attributes.logo.data[0];
              const { url } = attributes;

              return (
                <div className="carusels" key={url}>
                  <img
                    className="carusel-img"
                    src={`https://zamki-strapi.codium.pro/${url}`}
                    alt="brand"
                  />
                </div>
              );
            })}
          </Marquee>
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

export default Manufacturers;
