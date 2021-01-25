import React from "react";
import s from "./Checkboxes.module.scss";
import Checkbox from "../checkbox";

const Checkboxes = ({
  label,
  className,
  items,
  onChange,
  value = {},
  ...rest
}) => {
  const onChangeHandler = ( el ) => {
    const newValue = { ...value, ...el };
    onChange(newValue);
  };
  return (
    <div className={s.checkboxesWrapper}>
      <span className={s.label}>{label}</span>
      <div className={s.checkboxes}>
        {items &&
          items.map(props => (
            <Checkbox
              {...props}
              value={value[props.name]}
              onChange={onChangeHandler}
            />
          ))}
      </div>
    </div>
  );
};

export default Checkboxes;
