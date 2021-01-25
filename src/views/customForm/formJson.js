export const formJson = [
  {
    component: "Label",
    text: "Анкета"
  },
  {
    component: "Input",
    name: "name",
    label: "Имя",
    required: true,
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["Имя обязательно для заполения"]
      }
    ]
  },
  {
    component: "Counter",
    name: "age",
    label: "Возраст",
    required: true,
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["Возраст обязательно для заполения"]
      }
    ]
  },
  {
    component: "Select",
    name: "maritalStatus",
    label: "Семейное положение",
    required: true,
    options: [
      {
        label: "Не женат/не замужем",
        value: "notMarried"
      },
      {
        label: "Женат/Замужем",
        value: "married"
      }
    ],

  },
  {
    component: "Inputs",
    name: "education",
    label: "ВУЗ",
    required: true,

  },

  {
    component: "Select",
    name: "birthPlace",
    label: "Место рождения",
    required: true,
    options: [
      {
        label: "Не важно",
        value: "nomatters"
      },
      {
        label: "Москва",
        value: "Moscow"
      },
      {
        label: "Спб",
        value: "SPB"
      },
      ,
      {
        label: "Омск",
        value: "Omsk"
      }
    ]
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
    required: true,

  },
  {
    component: "Button",
    name: "submitButton",
    label: "Отправить",
    required: true
  }
];
