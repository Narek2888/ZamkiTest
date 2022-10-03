import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Footer.scss";
import { getDataObj } from "../../utils";

const Footer = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    getDataObj("https://zamki-strapi.codium.pro/api/footer", setProducts);
  }, []);

  const {
    column_1: column__1,
    column_2: column__2,
    column_3: column__3,
    column_4: column__4,
  } = products;

  return (
    <div className="footer">
      <div className="footer__up">
        <div className="footer__up__contact">
          <div className="footer__up__contact__logo">
            <img src={logo} alt="footer_logo" />
          </div>
          {column__1?.length ? (
            <div className="footer__up__contact__item">
              {column__1?.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </div>
          ) : null}
        </div>

        <div className="footer__up__products">
          <div className="footer__up__products__text">ПРОДУКЦИЯ</div>

          <div className="footer__up__products__items">
            {column__2?.length ? (
              <div className="footer__up__products__items__column2">
                {column__2?.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            ) : null}
            {column__3?.length ? (
              <div className="footer__up__products__items__column3">
                {column__3?.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            ) : null}

            {column__4?.length ? (
              <div className="footer__up__products__items__column4">
                {column__4?.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="footer__down">
        <span>© Copyright 2022. All rights reserved </span>
      </div>
    </div>
  );
};
export default Footer;
