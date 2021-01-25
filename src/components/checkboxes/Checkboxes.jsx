import React from "react";
import s from "./Checkboxes.module.scss";
import Checkbox from "../checkbox";

const Checkboxes = ({ label, className, items, ...rest }) => {
  return (
    <div className={s.checkboxesWrapper}>
      <span className={s.label}>{label}</span>
      <div className={s.checkboxes}>
        {items &&
          items.map((props ) => (
              <Checkbox {...props}/>
          ))}
      </div>
    </div>
  );
};

export default Checkboxes;
