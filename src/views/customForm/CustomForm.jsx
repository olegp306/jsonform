import React from "react";
import "./styles.scss";
import Components from "../../components";

const formJson = [
  {
    component: "Label",
    text: "Анкета"
  },
  {
    component: "Input",
    name: "name",
    label: "Имя",
    isRequired: true
  },
  {
    component: "Counter",
    name: "age",
    label: "Возраст",
    isRequired: true
  },
  {
    component: "Select",
    name: "maritalStatus",
    label: "Семейное положение",
    isRequired: true,
    options: [
      {
        label: "Не женат/не замужем",
        value: "notMarried"
      },
      {
        label: "Женат/Замужем",
        value: "married"
      }
    ]
  },
  {
    component: "Inputs",
    name: "maritalStatus",
    label: "ВУЗ",
    isRequired: true
  },
  {
    component: "Input",
    name: "skills",
    label: "Место рождения",
    isRequired: true
  },
  {
    component: "Checkboxes",
    name: "skills",
    items: [
      {
        name: "Communication",
        label: "Общение"
      },
      {
        name: "languages",
        label: "Знание иностранных языков"
      },
      {
        name: "cooking",
        label: "Готовка"
      },
        {
        name: "runWithBorders",
        label: "Бег с припятствиями"
      },{
        name: "fastReading",
        label: "Быстрое чтение"
      },{
        name: "box",
        label: "Бокс"
      },{
        name: "singing",
        label: "Пение"
      },{
        name: "programming",
        label: "Программирование"
      },
        {
        name: "driving",
        label: "Вождение"
      },
    ],
    label: "Навыки",
    isRequired: true
  },
  {
    component: "Button",
    name: "submitButton",
    label: "Отправить",
    isRequired: true
  }
];

// название компонента,
// label,
// placeholder,
// имя модели, данные необходимые для рендера

const renderForm = json => {
  return json.map(element => {
    const { component, ...rest } = element;
    return React.createElement(Components[component], { ...rest });
  });
};

const CustomForm = () => {
  return <div className="formWrapper">{renderForm(formJson)}</div>;
};

export default CustomForm;
