import React from "react";
import { Field, Form } from "react-final-form";

const onSubmit = async (value, setModalOpen) => {
  value.fullName = "";
  value.emil = "";
  value.phoneNumber = "";
  value.deliveryType = "byOwn";
  value.comment = "";

  setModalOpen(true);
};

const initialValue = {
  fullName: "",
  emil: "",
  phoneNumber: "",
  deliveryType: "byOwn",
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

const FormComponent = ({ setModalOpen }) => {
  return (
    <Form
      onSubmit={(value) => onSubmit(value, setModalOpen)}
      validate={validate}
      initialValues={initialValue}
      render={({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="fullName">
                {({ input, meta }) => (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Ф.И.О.*</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="Заполните свое Ф.И.О"
                    />
                    {meta.error && meta.touched && (
                      <span style={{ color: "red" }}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="emil">
                {({ input, meta }) => (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Почта *</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="Заполните свой адрес электронной почты"
                    />
                    {meta.error && meta.touched && (
                      <span style={{ color: "red" }}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="phoneNumber">
                {({ input, meta }) => (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>номер телефона *</label>
                    <input {...input} type="text" placeholder="+7 (916)" />
                    {meta.error && meta.touched && (
                      <span style={{ color: "red" }}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </div>

            <div>
              <label>Комментарии к заказу </label>
              <Field
                name="comment"
                component="textarea"
                placeholder="оставьте сообщение "
              />
            </div>

            <button
              className="basketSection__items__buy__order"
              disabled={submitting}
            >
              Оформить заказ
            </button>
          </form>
        );
      }}
    />
  );
};

export default FormComponent;
