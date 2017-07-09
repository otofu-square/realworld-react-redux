import { Dispatch } from 'redux';
import { push } from 'react-router-redux';

import { User } from '../models/user';
import { Auth as AuthAgent } from '../agent';

export const UPDATE_REGISTER_EMAIL = 'UPDATE_REGISTER_EMAIL';
export const UPDATE_REGISTER_PASSWORD = 'UPDATE_REGISTER_PASSWORD';
export const UPDATE_REGISTER_USERNAME = 'UPDATE_REGISTER_USERNAME';
export const REGIST_REQUEST = 'REGIST_REQUEST';
export const REGIST_FAILURE = 'REGIST_FAILURE';
export const REGIST_SUCCESS = 'REGIST_SUCCESS';

export interface IActions {
  UPDATE_REGISTER_EMAIL: {
    type: typeof UPDATE_REGISTER_EMAIL;
    payload: { email: string };
  };
  UPDATE_REGISTER_PASSWORD: {
    type: typeof UPDATE_REGISTER_PASSWORD;
    payload: { password: string };
  };
  UPDATE_REGISTER_USERNAME: {
    type: typeof UPDATE_REGISTER_PASSWORD;
    payload: { username: string };
  };
  REGIST_REQUEST: { type: typeof REGIST_REQUEST };
  REGIST_FAILURE: {
    type: typeof REGIST_FAILURE;
    payload: { errors: Array<any> };
  };
  REGIST_SUCCESS: {
    type: typeof REGIST_SUCCESS;
    payload: { currentUser: User };
  };
}

export type IAction = IActions[keyof IActions];

export const updateRegisterEmail = (email: string) => ({
  type: UPDATE_REGISTER_EMAIL as typeof UPDATE_REGISTER_EMAIL,
  payload: { email },
});

export const updateRegisterPassword = (password: string) => ({
  type: UPDATE_REGISTER_PASSWORD as typeof UPDATE_REGISTER_PASSWORD,
  payload: { password },
});

export const updateRegisterUsername = (username: string) => ({
  type: UPDATE_REGISTER_PASSWORD as typeof UPDATE_REGISTER_PASSWORD,
  payload: { username },
});

export const registRequest = () => ({
  type: REGIST_REQUEST as typeof REGIST_REQUEST,
});

export const registFailure = (errors: Array<any>) => ({
  type: REGIST_FAILURE as typeof REGIST_FAILURE,
  payload: { errors },
});

export const registSuccess = (currentUser: any) => ({
  type: REGIST_SUCCESS as typeof REGIST_SUCCESS,
  payload: { currentUser },
});

export const regist = (
  email: string,
  password: string,
  username: string,
) => async (dispatch: Dispatch<{}>) => {
  dispatch(registRequest());
  try {
    const response = await RegisterAgent.regist(email, password);
    const json = await response.json();
    if (response.status === 200) {
      dispatch(registSuccess(json.user));
      dispatch(push('/'));
    } else {
      dispatch(registFailure(json.errors));
    }
  } catch (e) {
    dispatch(registFailure([{ SystemError: 'has occured.' }]));
  }
};
