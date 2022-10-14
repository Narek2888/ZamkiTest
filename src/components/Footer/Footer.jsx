import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import "./Footer.scss";
import { getDataObj } from "../../utils";

const Footer = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    getDataObj("https://zamki-strapi.codium.pro/api/footer", setProducts);
  }, []);

  const {
    column_1,
    column_2,
    column_3,
    column_4,
  } = products;

  return (
    <div className="footer">
      <div className="footer__up">
        <div className="footer__up__contact">
          <div className="footer__up__contact__logo">
            <img src={logo} alt="footer_logo" />
          </div>
          {column_1?.length ? (
            <div className="footer__up__contact__item">
              {column_1?.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </div>
          ) : null}
        </div>

        <div className="footer__up__products">
          <div className="footer__up__products__text">ПРОДУКЦИЯ</div>

          <div className="footer__up__products__items">
            {column_2?.length ? (
              <div className="footer__up__products__items__column2">
                {column_2?.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            ) : null}
            {column_3?.length ? (
              <div className="footer__up__products__items__column3">
                {column_3?.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            ) : null}

            {column_4?.length ? (
              <div className="footer__up__products__items__column4">
                {column_4?.map((item, index) => {
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
