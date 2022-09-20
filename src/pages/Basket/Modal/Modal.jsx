import React from "react";
import "./Modal.scss";
import donePng from "../../../assets/done.png";
import close from "../../../assets/close.png";

const Modal = ({ setModalOpen }) => {

  return (
    <div className="modalBackground">
      <div className="modal">
        <div
          className="modal__close"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <img src={close} alt="" />
        </div>
        <div className="modal__donePng">
          <img src={donePng} alt="" />
        </div>
        <div className="modal__text">Ваш заказ успешно оформлен!</div>
        <div className="modal__message">
          Наш менеджер в ближайшее время свяжется с вами для
          <p> подтверждения и уточнения </p>
          заказа.
        </div>
      </div>
    </div>
  );
};

export default Modal;
