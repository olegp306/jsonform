import React from 'react';
import s from "./Button.module.scss";
import cn from 'classnames/bind';

const Button = ({ children, ...rest }) => <button className={s.button} {...rest}>{children || 'Отправить'}</button>;

export default Button;
