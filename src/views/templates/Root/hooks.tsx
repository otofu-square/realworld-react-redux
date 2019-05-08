import { useCallback } from "react";
import { push } from "connected-react-router";
import { useDispatch } from "../../../redux";

export const useHooks = () => {
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

  return {
    onLogoClick,
    onHomeClick,
    onSigninClick
  };
};
