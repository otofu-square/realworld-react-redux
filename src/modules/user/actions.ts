import { User } from "./types";
import { actionTypes } from "./actionTypes";
import { CreatorsToActions } from "../../redux";

const startLoading = () => ({
  type: actionTypes.START_LOADING
});

const stopLoading = () => ({
  type: actionTypes.STOP_LOADING
});

const create = (email: string, password: string) => ({
  type: actionTypes.CREATE,
  payload: { email, password }
});

const createSuccess = (user: User) => ({
  type: actionTypes.CREATE_SUCCESS,
  payload: user
});

export const actions = {
  startLoading,
  stopLoading,
  create,
  createSuccess
};

export type Actions = CreatorsToActions<typeof actions>;
