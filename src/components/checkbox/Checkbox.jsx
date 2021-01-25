import React,{useState} from "react";
import cn from "classnames/bind";
import s from "./Checkbox.module.scss";

const Checkbox = ({ name, label, className, ...rest }) => {
    const[value,setValue]=useState(false)
  return (
    <div className={cn(s.checkboxWrapper)} onClick={()=>setValue(!value)}>
      <input type="checkbox" name={name}  checked={value}/>
      <span className={cn(s.checkboxLabel,s.unselectable)}>{label}</span>
    </div>
  );
};

export default Checkbox;
