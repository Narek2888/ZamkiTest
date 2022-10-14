import React, { useState } from "react";
import "./MakeAnOrder.scss";
import HomeCategories from "../../HomeCategories/HomeCategories";
import Manufacturers from "../../Manufacturers/Manufacturers";
import Modal from "../../../pages/Basket/Modal/Modal";
import Layout from "../../../Layout/Layout";

const MakeAnOrder = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Layout>
      <div className="makeAnOrder">
        <div className="makeAnOrder__up">
          <HomeCategories />

          <div className="makeAnOrder__up__section">
            <div className="makeAnOrder__up__section__text">Оформить заказ</div>
            <div className="makeAnOrder__up__section__type">
              <div>Товары в корзине:</div>
              <button className="makeAnOrder__up__section__type__done">
                Готовые к заказу
              </button>
              <button className="makeAnOrder__up__section__type__delayed">
                Отложенные
              </button>
            </div>

            <div className="makeAnOrder__up__section__input">
              <div className="makeAnOrder__up__section__input__name">
                <p>
                  Ф.И.О. <span>*</span>
                </p>
                <input type="text" placeholder="Заполните свое Ф.И.О" />
              </div>

              <div className="makeAnOrder__up__section__input__email">
                <p>
                  Почта * <span>*</span>
                </p>
                <input
                  type="text"
                  placeholder="Заполните свой адрес электронной почты"
                />
              </div>

              <div className="makeAnOrder__up__section__input__phoneNumber">
                <p>
                  Номер телефона * <span>*</span>
                </p>
                <input type="text" placeholder="+7 (916)" />
              </div>

              <div className="makeAnOrder__up__section__input__deliveryMethods">
                <p className="makeAnOrder__up__section__input__deliveryMethods__text">
                  Способы доставки
                </p>

                <div className="makeAnOrder__up__section__input__deliveryMethods__button">
                  <button className="makeAnOrder__up__section__input__deliveryMethods__button__btn">
                    Самовывоз
                  </button>
                  <button className="makeAnOrder__up__section__input__deliveryMethods__button__btn">
                    Доставка в пределах мкад
                  </button>
                  <button className="makeAnOrder__up__section__input__deliveryMethods__button__btn">
                    Доставка за мкад
                  </button>
                </div>
              </div>

              <div className="makeAnOrder__up__section__input__comment">
                <p className="makeAnOrder__up__section__input__comment__text">
                  Комментарии к заказу
                </p>
                <input type="text" placeholder="Օставьте сообщение" />
              </div>
            </div>

            <div className="basketSection__items__buy">
              <div className="basketSection__items__buy__total">
                Итого: 52040 руб.
              </div>

              <div
                className="basketSection__items__buy__order"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Оформить заказ
              </div>
            </div>
          </div>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
        </div>

        <Manufacturers />
      </div>
    </Layout>
  );
};

export default MakeAnOrder;
