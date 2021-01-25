import React from "react";
import s from "./Select.module.scss";
import cn from "classnames/bind";

const Select = ({ label, name, className, options }) => {
  return (
    <div className={s.selectWrapper}>
      <span className={s.label}>{label}</span>
      <select name={name} id={name} className={cn(s.select, className)}>
        {options &&
          options.map(option => {
            const { value, label } = option;
            return <option value={value}>{label}</option>;
          })}
      </select>
    </div>
  );
};

export default Select;
