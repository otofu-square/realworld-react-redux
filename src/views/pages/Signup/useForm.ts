import { useFormik } from "formik";
import { push } from "connected-react-router";
import { userOperations } from "../../../modules/user";
import { useDispatch, useSelector } from "../../../redux";

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

export const useForm = () => {
  const dispatch = useDispatch();
  const { values, errors, setErrors, handleChange, handleSubmit } = useFormik<
    Values
  >({
    initialValues,
    onSubmit: async (values: Values) => {
      const errorResponse = await dispatch(userOperations.create(values));
      if (errorResponse) {
        setErrors({
          username: errorResponse.errors.username.join(" "),
          email: errorResponse.errors.email.join(" "),
          password: errorResponse.errors.password.join(" ")
        });
      } else {
        dispatch(push("/"));
      }
    }
  });

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
};
