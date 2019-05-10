import { CreatorsToActions } from "~/redux";
import { User } from "./types";
import { actionTypes } from "./actionTypes";

const startLoading = () => ({
  type: actionTypes.START_LOADING
});

const stopLoading = () => ({
  type: actionTypes.STOP_LOADING
});

const loginSuccess = (user: User) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user
});

const createSuccess = (user: User) => ({
  type: actionTypes.CREATE_SUCCESS,
  payload: user
});

export const actions = {
  startLoading,
  stopLoading,
  loginSuccess,
  createSuccess
};

export type Actions = CreatorsToActions<typeof actions>;
