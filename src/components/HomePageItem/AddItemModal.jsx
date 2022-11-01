import React from "react";
import close from "../../assets/close.png";
import addToBasketPng from "../../assets/addToBasket.png"
import { Link } from "react-router-dom";

const AddItemModal = ({ setAddItemModal, itemName }) => {

  return (
    <div className="modalBackground">
      <div className="modal">
        <div
          className="modal__close"
          onClick={() => {
            setAddItemModal(false);
          }}
        >
          <img src={close} alt="" />
        </div>
        <div className="modal__donePng">
          <img src={addToBasketPng} alt="" />
        </div>
        <div className="modal__text">Успешно добавлен в корзину.</div>
        <div className="modal__addItem">
          <p> {itemName}</p>
        </div>
        <Link to="/basket" className="modal__goToBasket">
        Перейти в корзину
        </Link>
      </div>
    </div>
  );
};

export default AddItemModal;
