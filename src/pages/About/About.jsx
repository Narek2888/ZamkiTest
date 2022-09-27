import React from "react";
import "./About.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Layout from "../../Layout/Layout";
const About = () => {
  return (
    <Layout>
      <div className="about">
        <HomeCategories />
        <div className="about__text">
          <h2 className="paying__text__title">О компании</h2>
          <h3 className="padding"> О нас - только факты.</h3>
          <p>
            На сегодняшний день нам уже исполнилось 19 лет. В сфере торговли
            замочно-скобяной продукцией компаний с таким опытом работы можно
            пересчитать по пальцам одной руки.
          </p>
          <p>
            Коллектив нашей компании насчитывает 27 человек – это общее
            количество сотрудников розничного и оптового направления.
          </p>
          <p>
            В ассортименте нашей компании более 20 000 наименований, а среди
            наших поставщиков ведущие заводы по производству замочно-скобяной
            продукции из России, Италии, Испании, Германии, Турции и Китая.
          </p>
          <p>
            Наш головной офис и оптовый склад находятся на крупнейшей в Европе
            торгово-строительной ярмарке "Славянский мир" (г.Москва, 41 км МКАД,
            Мельница).
          </p>
          <p>
            Наши розничные магазины в г.Москва находятся по адресу: ТСЯ
            "Славянский мир" (Мельница), ТК "Конструктор", ТСК "Молоток"
            (Калужское шоссе).
          </p>
          <h3 className="padding"> Почему выбирают нас?</h3>
          <ul>
            <li>
              Большая складская программа – 80% представленного товара всегда в
              наличии (общая площадь складских помещений более 500 кв.метров).
            </li>
            <li>
              Никаких посредников при закупке продукции. Мы работаем напрямую с
              заводами-производителями и поэтому можем предложить вам самые
              выгодные цены.
            </li>
            <li>
              У нас есть розничные магазины, в которых вы сможете в живую
              посмотреть всю интересующую вас продукцию.
            </li>
            <li>
              Мы работаем со всеми ведущими производителями замочно-скобяной
              продукции и можем скомплектовать заказ любой сложности в самые
              кратчайшие сроки.
            </li>
            <li>
              Вы всегда получите от нас грамотную консультацию, так как средний
              срок работы сотрудников нашей компании составляет около 6 лет. Мы
              разбираемся в продукции, которую продаём - можете в этом не
              сомневаться.
            </li>
            <li>
              Собственный отдел логистики - наши водители являются сотрудниками
              нашей компании, а не какой-то сторонней организации. Это позволяет
              нам быть максимально мобильными и гибкими при организации доставки
              ваших заказов.
            </li>
            <li>
              Работаем семь дней в неделю. Если вы не успели забрать свой заказ
              в будни, то сможете это сделать в выходные дни – всё для вашего
              удобства.
            </li>
          </ul>
        </div>
      </div>
      <Manufacturers />
    </Layout>
  );
};
export default About;