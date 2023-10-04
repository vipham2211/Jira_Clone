import React from "react";
import { Formik, Field as FormikField, Form as FormikForm, useFormikContext } from "formik";
import FieldComponent from "./Field";
import { get } from "lodash";


const Form = ({ ...otherProps }) => <Formik {...otherProps} />;

Form.Element = (props) => <FormikForm noValidate {...props} />;

Form.Field = (props) => (
  <FormikField {...props}>
    {({ field, form: { touched, errors, setFieldValue,values } }) => {
    const formik = useFormikContext();
      return (
        <FieldComponent
          {...field}
          {...props}
          error={get(touched, props.name) && get(errors, props.name)}
          onChange={(value) =>  setFieldValue(props.name, value) }
          formik={formik}
        />
      );
    }}
  </FormikField>
);

export default Form;
