import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

interface Values {
  [key: string]: any;
}

const Forms = () => {
  const [fields, setFields] = useState([]);
  const [form, setForm] = useState([]);
  useEffect(() => {
    axios.get("../../public/data/tot.json").then((response) => {
      const data = response.data;
      const formFields = data.inputs.map((field: any) => (
        <div key={field.name}>
          <label htmlFor={field.name} style={{ margin: 30 }}>
            {field.name} :
          </label>
          <Field
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
          />
        </div>
      ));
      setFields(formFields);
    });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Title</h1>
      <h2>description</h2>
      <h3>subtitle</h3>

      <Formik
        initialValues={{}}
        validationSchema={Yup.object().shape({})}
        onSubmit={(values: Values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {fields}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forms;
