import React from "react";
import { Field } from "formik";
import Components from "../../../../components";

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

        const CreatedComponent = React.createElement(Components[component], {
          name,
          value,
          onChange,
          dirty,
          errors,
          setFieldValue,
          submitCount,
          ...rest
        });
        return (
          <>
            {CreatedComponent}
            {submitCount > 0 && errors[name] && (
              <span style={{ marginLeft: "170px", color: "red" }}>
                {errors[name]}
              </span>
            )}
          </>
        );
      }}
    </Field>
  );
};

export default InputField;
