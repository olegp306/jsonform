import React from "react";
import s from "./Button.module.scss";

const Button = ({ children, ...rest }) => {
  return (
    <button onClick={rest.handleSubmit} className={s.button} {...rest}>
      {children || "Отправить"}
    </button>
  );
};

export default Button;
