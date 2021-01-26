import React from "react";
import "./styles.scss";
import { Formik } from "formik";
import { formJson } from "./formJson";
import { createYupSchema } from "./components/yupschema";
import * as yup from "yup";
import InputField from "./components/InputField/InputField";

const renderForm = (json, props) => {
  return json.map(element => {
    return <InputField {...element} {...props} />;
  });
};

const CustomForm = () => {
  const formSubmit = values => {
    console.log("formSubmit", values);
    alert("Смотри консоль", values);
  };

  const yepSchema = formJson.reduce(createYupSchema, {});
  const validateSchema = yup.object().shape(yepSchema);

  return (
    <div className="formWrapper">
      <Formik
        initialValues={{}}
        onSubmit={formSubmit}
        validationSchema={validateSchema}
      >
        {props => renderForm(formJson, props)}
      </Formik>
    </div>
  );
};

export default CustomForm;


