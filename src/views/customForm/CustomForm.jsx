import React from 'react';
import "./styles.scss"
import Components from '../../components';

const formJson = [
  {
    component: 'Label',
    text: 'Анкета',
  },
  {
    component: 'Input',
    name: 'name',
    label: 'Имя',
    isRequired: true,
  },
  {
    component: 'Counter',
    name: 'age',
    label: 'Возраст',
    isRequired: true,
  },
  {
    component: 'Select',
    name: 'maritalStatus',
    label: 'Семейное положение',
    isRequired: true,
  },
  {
    component: 'Inputs',
    name: 'maritalStatus',
    label: 'ВУЗ',
    isRequired: true,
  },
  {
    component: 'Input',
    name: 'skills',
    label: 'Место рождения',
    isRequired: true,
  },
  {
    component: 'Checkboxes',
    name: 'skills',
    label: 'Навыки',
    isRequired: true,
  },
  {
    component: 'Button',
    name: 'submitButton',
    label: 'Отправить',
    isRequired: true,
  },
];

// название компонента,
// label,
// placeholder,
// имя модели, данные необходимые для рендера

const renderForm = (json) => {
  return json.map((element) => {
    const { component, ...rest } = element;
    return React.createElement(Components[component], { ...rest });
  });
};

const CustomForm = () => {
  return(
  <div className='formWrapper'>{renderForm(formJson)}</div>);
};

export default CustomForm;
