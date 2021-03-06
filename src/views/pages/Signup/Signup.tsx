import { push } from "connected-react-router";
import React, { useCallback } from "react";
import { useForm } from "./useForm";
import { Wrapper } from "./Wrapper";
import { ErrorsList } from "./ErrorsList";
import { useDispatch, useSelector } from "~/redux";

export const Signup: React.FC = () => {
  const { values, errors, handleChange, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const disabled = useSelector(() => false);
  const onSigninButtonClick = useCallback(() => dispatch(push("/signin")), [
    dispatch
  ]);

  return (
    <Wrapper>
      <h1 className="text-xs-center">Sign Up</h1>
      <p className="text-xs-center">
        <a onClick={onSigninButtonClick}>Have an account?</a>
      </p>
      <ErrorsList errors={errors} />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              id="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
          </fieldset>
          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={disabled}
          >
            Sign up
          </button>
        </fieldset>
      </form>
    </Wrapper>
  );
};
