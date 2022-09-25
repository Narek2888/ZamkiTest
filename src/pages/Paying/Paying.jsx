import React from "react";
import "./Paying.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Layout from "../../Layout/Layout";

const Paying = () => {
  return (
    <Layout>
      <div>
        <div className="paying">
          <HomeCategories />
          <div className="paying__text">
            <h2 className="paying__text__title">Оплата</h2>
            <h3 className="padding"> Оптовым клиентам</h3>
            Компания «Замки тут» приглашает к сотрудничеству оптовых клиентов из
            Москвы, регионов РФ и стран ближнего зарубежья. Мы осуществляем
            поставки замочно-скобяной продукции, фурнитуры для окон и дверей от
            ведущих производителей Турции, России, Италии, Германии, Испании,
            Китая. Возможна доставка или самовывоз со склада в Москве.
            <h3 className="padding">
              Предлагаем лучшие условия для оптовых клиентов
            </h3>
            <ul>
              <li>
                Работа с НДС, оформление документов для бухгалтерской
                отчетности.
              </li>
              <li>
                Развитая транспортная и складская логистика, доставка в любой
                город РФ и в страны СНГ по согласованию с заказчиком.
              </li>
              <li> Гибкая система скидок постоянным клиентам. </li>
              <li>
                Широкий ассортимент продукции от разных производителей,
                возможность комплексных поставок на предприятия и в организации.
              </li>
              <li>
                Регулярные акции с выгодными предложениями для ограниченного
                круга оптовых заказчиков.
              </li>
              <li> Специальные условия для отделов снабжения и дизайнеров.</li>
              <li>
                Гарантия качества на все товары за счет прямых поставок с
                заводов-изготовителей.
              </li>
              <li>
                Оперативное исполнение заявок большого объема и любой сложности.
              </li>
              <li>
                Консультации опытных специалистов компании по ассортименту и
                особенностям конкретных видов продукции.
              </li>
              <li> Прием заказов в любой день недели без выходных. </li>
            </ul>
            <h3 className="padding">Почему выбирают нас</h3>
            Более 19 лет мы специализируемся на поставках замочно-скобяной
            продукции и на сегодняшний день являемся одной из самых опытных
            компаний в столичном регионе. В нашей складской программе есть все,
            что необходимо для оснащения дверей и окон различного класса и
            назначения. Ассортимент включает более 20 000 наименований. Оптовый
            склад расположен на ярмарке «Славянский мир» - крупной
            торгово-строительной площадке с удобными подъездами и оборудованными
            зонами погрузки.
            <p className="padding">
              Сотрудничество с компанией «Замки тут» - это удобно и выгодно.
              Наши преимущества:
            </p>
            <ul>
              <li>
                Репутация. Нас хорошо знают на рынке как надежного поставщика,
                соблюдающего договорные сроки и обязательства.
              </li>
              <li>
                Сервис. Мы заинтересованы в оптовых клиентов. Гарантируем
                высокую культуру обслуживания.
              </li>
              <li>
                Компетентность. Каждый запрос обрабатывается качественно и в
                короткие сроки. При необходимости мы сами подберем продукцию под
                требования покупателя.
              </li>
              <li>
                Индивидуальный подход. С заказчиками работают приветливые и
                квалифицированные менеджеры.
              </li>
            </ul>
            <p className="padding">
              {" "}
              По вопросам сотрудничества позвоните нам по телефону, указанному
              на сайте. Мы также готовы обсуждать условия оптовых поставок в
              нашем офисе в Москве на личной консультации.
            </p>
          </div>
        </div>
        <Manufacturers />
      </div>
    </Layout>
  );
};

export default Paying;
