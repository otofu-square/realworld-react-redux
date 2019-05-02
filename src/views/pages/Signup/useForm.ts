import { useFormik } from "formik";

export type Values = {
  username: string;
  email: string;
  password: string;
};

const initialValues = {
  username: "",
  email: "",
  password: ""
};

const onSubmit = (values: Values) => {
  console.log(values);
};

export const useForm = () => {
  const { values, errors, handleChange } = useFormik<Values>({
    initialValues,
    onSubmit
  });
  return {
    values,
    errors,
    handleChange
  };
};
