import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { FormFields } from "./FormField";
import * as Yup from "yup";
interface Values {
  [key: string]: any;
}
export default function Forms() {
  const [fields, setFields] = useState<any[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    subtitle: "",
  });
  useEffect(() => {
    axios.get("../../public/data/tot.json").then((response) => {
      const data = response.data;
      setFields(data.inputs);
      setForm(data);
    });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{form.title}</h1>
      <h2>{form.description}</h2>
      <h2>{form.subtitle}</h2>
      <Formik
        initialValues={{}}
        validationSchema={Yup.object().shape({})}
        onSubmit={(values: Values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <FormFields fields={fields} />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
