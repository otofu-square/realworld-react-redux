import React from "react";
import { FormikErrors } from "formik";
import { Values } from "./useForm";

type Props = {
  errors: FormikErrors<Values>;
};

export const ErrorsList: React.FC<Props> = ({ errors }) =>
  errors && (
    <ul className="error-messages">
      {Object.keys(errors).map(key => (
        <li key={key}>
          {key} {errors[key]}
        </li>
      ))}
    </ul>
  );
