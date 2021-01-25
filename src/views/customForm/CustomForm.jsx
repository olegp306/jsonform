import React from "react";
import "./styles.scss";
import Components from "../../components";
import { Field } from "formik";
import { Formik } from "formik";
import { formJson } from "./formJson";


const renderForm = (json, props) => {
  return json.map(element => {
    return <InputField {...element} {...props} />;
  });
};

const CustomForm = () => {
  const formSubmit = values => {
    console.log("formSubmit", values);
  };

  return (
    <div className="formWrapper">
      <Formik initialValues={{}} onSubmit={formSubmit}>
        {props => renderForm(formJson, props)}
      </Formik>
    </div>
  );
};

export default CustomForm;

export const InputField = ({ name, component, ...rest }) => {
  return (
    <Field name={name}>
      {({
        field: { value },
        form: { errors, dirty, setFieldValue, submitCount }
      }) => {
        const onChange = el => {
          if (el.target && el.target.value) {
            const newValue = el.target.value;
            setFieldValue(name, newValue);
          } else {
            setFieldValue(name, el);
          }
        };
        return React.createElement(Components[component], {
          name,
          value,
          onChange,
          dirty,
          errors,
          setFieldValue,
          submitCount,
          ...rest
        });
      }}
    </Field>
  );
};
