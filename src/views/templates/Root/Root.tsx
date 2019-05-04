import React, { useCallback } from "react";
import { push } from "connected-react-router";
import { Header } from "./Header";
import { useDispatch } from "../../../redux";

export const Root: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const onLogoClick = useCallback(() => {
    dispatch(push("/"));
  }, [dispatch]);
  const onHomeClick = useCallback(() => {
    dispatch(push("/"));
  }, [dispatch]);
  const onSigninClick = useCallback(() => {
    dispatch(push("/signin"));
  }, [dispatch]);

  return (
    <>
      <Header
        onLogoClick={onLogoClick}
        onHomeClick={onHomeClick}
        onSigninClick={onSigninClick}
      />
      {children}
    </>
  );
};
