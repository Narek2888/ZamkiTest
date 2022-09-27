import React from "react";
import "./Delivery.scss";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Manufacturers from "../../components/Manufacturers/Manufacturers";
import Layout from "../../Layout/Layout";

const Delivery = () => {
  return (
    <Layout>
      <div className="delivery">
        <HomeCategories />
        <div className="delivery__text">
          <h2 className="delivery__text__title">Доставка </h2>
          <h3 className="padding"> Самовывоз</h3> Забрать заказ самовывозом вы
          можете при оплате наличными либо при оплате безналичным расчетом в
          одном из наших магазинов: <h3 className="padding">Доставка</h3> Как
          правило, доставка осуществляется через 1-2 дня после оформления
          заказа. Доставку осуществляем при заказе от 1000 руб.
          <ul>
            Стоимость доставки (на автомобиле) по г. Москва - 400 руб.*
            <li>*Выезд за МКАД (доп. оплата) 40 руб./ за километр.</li>
            <li>
              *Бесплатное время ожидания курьером - 15 минут (далее 1 мин./20
              руб.).
            </li>
            <li>
              *При осуществлении доставки, курьер звонит за час, если дозвонится
              не удалось - доставка не производится.
            </li>
            <li>
              *При доставке в торгово-офисные центры доставка осуществляется до
              первого препятствия.
            </li>
            <li>
              *При доставке в места, где нет возможности припарковать
              автомобиль, а в окрестностях есть только платные парковки, заказ
              передается в ближайшем месте, где можно оставить автомобиль.
            </li>
            <li> *Тарифы для юр. лиц могут отличаться.</li>
            <li>
               *Отнеситесь ответственно к получению товара, если хотите быть 
              уверены в том, что он будет доставлен в сохранности. 
            </li>
            
            <li>
               *Любые вопросы относительно условий, сроков и стоимости доставки
               вы сможете обсудить с нашем менеджером предварительно или
              непосредственно при оформлении заявки на доставку заказа.
            </li>
          </ul>
        </div>
      </div>
      <Manufacturers />
    </Layout>
  );
};

export default Delivery;
