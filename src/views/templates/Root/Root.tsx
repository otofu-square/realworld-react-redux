import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Header } from "./Header";

export const Root: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const onLogoClick = useCallback(() => dispatch(push("/")), [dispatch]);
  const onHomeClick = useCallback(() => dispatch(push("/")), [dispatch]);
  const onLoginClick = useCallback(() => dispatch(push("/login")), [dispatch]);

  return (
    <>
      <Header
        onLogoClick={onLogoClick}
        onHomeClick={onHomeClick}
        onLoginClick={onLoginClick}
      />
      {children}
    </>
  );
};
