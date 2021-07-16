import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { v4 as uuidv4 } from "uuid";


import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";

import {
  CustomForm,
  Label,
  Input,
  ErrorMsg,
  Button,
} from "./FormikContactForm.styled";



const validationSchema = Yup.object({
  name: Yup.string().required("Please enter contact name"),
  number: Yup.string()
    .phone("UA", true, "Please enter a valid phone number")
    .required(),
});

const FormikContactForm = ({ onSubmit }) => (
  <div>
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const { name, number } = values;
        onSubmit({ id: uuidv4(), name, number });
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ touched }) => (
        <CustomForm autoComplete="off">
          <Label htmlFor="firstName">
            <FaUserAlt size="16" />
            Name
            <Input type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component={ErrorMsg} />
          </Label>
          <Label htmlFor="firstName">
            <FaPhoneAlt size="16" />
            Number
            <Input type="text" name="number" placeholder="38(***) *** ****" />
            {touched.number && (
              <ErrorMessage name="number" component={ErrorMsg}></ErrorMessage>
            )}
          </Label>

          <Button type="submit">Add Contact</Button>
        </CustomForm>
      )}
    </Formik>
  </div>
);

export default FormikContactForm;
