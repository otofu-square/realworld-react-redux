import { useFormik } from "formik";
import * as R from "ramda";
import { push } from "connected-react-router";
import { userOperations } from "../../../modules/user";
import { useDispatch } from "../../../redux";

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
  const formik = useFormik<Values>({
    initialValues,
    onSubmit: async (values, formikHelper) => {
      const errorResponse = await dispatch(userOperations.create(values));
      if (!errorResponse) {
        dispatch(push("/"));
      } else {
        const formattedErrors = R.mapObjIndexed(
          R.join(", "),
          errorResponse.errors
        );
        formikHelper.setErrors(formattedErrors);
      }
    }
  });
  return formik;
};
