import React, { useState } from "react";
import "./MakeAnOrder.scss";
import HomeCategories from "../../HomeCategories/HomeCategories";

import Manufacturers from "../../Manufacturers/Manufacturers";
import Modal from "../../../pages/Basket/Modal/Modal";
import Layout from "../../../Layout/Layout";
import { useSelector } from "react-redux";
import Form from "./Form";

const MakeAnOrder = () => {
  const { totalAmount } = useSelector((state) => state.shop);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Layout>
      <div className="makeAnOrder">
        <div className="makeAnOrder__up">
          <HomeCategories />
          <div className="makeAnOrder__up__section">
            <div className="makeAnOrder__up__section__text">Оформить заказ</div>
            {/* <div className="makeAnOrder__up__section__type">
              <div>Товары в корзине:</div>
              <button className="makeAnOrder__up__section__type__done">
                Готовые к заказу
              </button>
              <button className="makeAnOrder__up__section__type__delayed">
                Отложенные
              </button>
            </div> */}

            <Form setModalOpen={setModalOpen} />

            <div className="basketSection__items__buy">
              <div className="basketSection__items__buy__total">
                Итого: {totalAmount} руб.
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
