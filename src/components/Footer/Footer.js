import logo from "../../assets/logo.png";
import "./Footer.scss";

const Footer = () => {
  const products = [
    "Замки",
    "Ручки",
    "Петли",
    "Цилиндровые механизмы",
    "Броненакладки",
    "Дверная фурнитура",
    "Доводчики дверей",
    "Перекодировочные ключи",
    "Оконная и ПВХ фурнитура",
    "Мебельная фурнитура",
    "Кронштейны",
    "Крючки",
    "Автопороги",
  ];

  return (
    <div className="footer">
      <div className="footer__up">
        <div className="footer__up__contact">
          <div className="footer__up__contact__logo">
            <img src={logo} alt="footer_logo" />
          </div>

          <div className="footer__up__contact__item">
            <div>+7 (495) 153 58 57</div>
            <div>+7 (910) 464 85 82</div>
            <div>zakaz@zamkitut.ru</div>
          </div>
        </div>

        <div className="footer__up__products">
          <div className="footer__up__products__text">ПРОДУКЦИЯ</div>

          <div className="footer__up__products__items">
            {products.map((item, index) => {
              return (
                <div className="footer__up__products__items__item" key={index}>
                  {item}
                </div>
              );
            })}
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
