import React from "react";
import { Field, Form } from "react-final-form";
import DeliveryType from "./DeliveryType";
const onSubmit = async (value, setModalOpen) => {
  value.fullName = "";
  value.emil = "";
  value.phoneNumber = "";
  value.deliveryType = "самовывоз";
  value.comment = "";
  setModalOpen(true);
};
const initialValue = {
  fullName: "",
  emil: "",
  phoneNumber: "",
  deliveryType: "самовывоз",
  comment: "",
};
const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "Укажите ваше имя";
  }
  if (!values.emil) {
    errors.emil = "Укажите ваш email";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "укажите ваш номер телефона";
  }
  if (!values.deliveryType) {
    errors.phoneNumber = "укажите вид доставки";
  }
  return errors;
};
const FormComponent = ({ setModalOpen, totalAmount }) => {
  return (
    <Form
      onSubmit={(value) => onSubmit(value, setModalOpen)}
      validate={validate}
      initialValues={initialValue}
      render={({ handleSubmit, submitting }) => {
        return (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__item">
              <Field name="fullName">
                {({ input, meta }) => (
                  <div className="form__item__name">
                    <label>Ф.И.О.*</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="Заполните свое Ф.И.О"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div className="form__item">
              <Field name="emil">
                {({ input, meta }) => (
                  <div className="form__item__email">
                    <label>Почта *</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="Заполните свой адрес электронной почты"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div className="form__item">
              <Field name="phoneNumber">
                {({ input, meta }) => (
                  <div className="form__item__phoneNumber">
                    <label>номер телефона *</label>
                    <input {...input} type="phone" placeholder="+7 (916)" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div className="deliveryType">
              <label>Способы доставки</label>
              <DeliveryType />
            </div>
            <div className="comment">
              <label>Комментарии к заказу </label>
              <Field
                className="comment__input"
                name="comment"
                component="textarea"
                placeholder="оставьте сообщение "
              />
            </div>

            <div className="basketSection__items__buy">
              <div className="basketSection__items__buy__total">
                Итого: {totalAmount} руб.
              </div>

              <button
                className="basketSection__items__buy__order"
                disabled={submitting}
              >
                Оформить заказ
              </button>
            </div>
          </form>
        );
      }}
    />
  );
};
export default FormComponent;
