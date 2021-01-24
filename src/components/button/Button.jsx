import React from 'react';
import cn from 'classnames/bind';

const Button = ({ children, ...rest }) => <button {...rest}>{children || 'Отправить'}</button>;

export default Button;
