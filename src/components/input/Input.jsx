import React from "react";
import s from "./Input.module.scss";
import cn from "classnames/bind";

const Input = ({ name, label, className, children, ...rest }) => {
  return (
    <div className={s.inputWrapper}>
      {label && <span className={s.label}>{label}</span>}
      <input name={name} className={cn(s.input, className)} {...rest} />
      {children}
    </div>
  );
};

export default Input;
