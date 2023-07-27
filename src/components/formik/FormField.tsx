import { Field } from "formik";

interface FormFieldsProps {
  fields: any[];
}

export const FormFields = ({ fields }: FormFieldsProps) => (
  <>
    {fields.map((field: any) => (
      <div key={field.name}>
        <label htmlFor={field.name} style={{ margin: 30 }}>
          {field.name}:{" "}
        </label>
        <Field
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
        />
      </div>
    ))}
  </>
);
