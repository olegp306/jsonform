import React from 'react';
import Input from '../input';
import cn from 'classnames/bind';
import s from './Counter.module.scss'

const Counter = ({classname, ...rest }) => {
  return (
    <div className={s.counterWrapper}>
      <Input type="number" className={cn(s.input,s.inputText)} {...rest}/>
        <div className={s.buttonsWrapper}>
            <div className={cn(s.button,s.plusButton)}>+</div>
            <div className={cn(s.button,s.minusButton)}>-</div>
        </div>
    </div>
  );
};

export default Counter;
