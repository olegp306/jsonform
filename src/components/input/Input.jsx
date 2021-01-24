import React from 'react';
import s from './Input.module.scss'
import cn from 'classnames/bind';

const Input = ({label,className, ...rest}) => {
  return (
    <div className={s.inputWrapper}>
        <span className={s.label} >{label}</span>
      <input className={cn(s.input,className) } {...rest}/>
    </div>
  );
};

export default Input;
