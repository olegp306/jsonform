export const formJson = [
  {
    component: "Label",
    text: "Анкета"
  },
  {
    component: "Input",
    name: "namename",
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
    name: "education",
    label: "ВУЗ",
    isRequired: true
  },
  {
    component: "Input",
    name: "birthPlace",
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
      },
      {
        name: "fastReading",
        label: "Быстрое чтение"
      },
      {
        name: "box",
        label: "Бокс"
      },
      {
        name: "singing",
        label: "Пение"
      },
      {
        name: "programming",
        label: "Программирование"
      },
      {
        name: "driving",
        label: "Вождение"
      }
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