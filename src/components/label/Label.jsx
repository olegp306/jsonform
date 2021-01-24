import React from 'react';
import  s from './Label.module.scss'


const Label = ({ className, text, ...rest }) => (
  <div className={s.label} {...rest}>
    {text}
  </div>
);

export default Label;
