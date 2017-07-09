import { Dispatch } from 'redux';
import { push } from 'react-router-redux';

import { User } from '../models/user';
import { Auth as AuthAgent } from '../agent';

export const UPDATE_AUTH_EMAIL = 'UPDATE_AUTH_EMAIL';
export const UPDATE_AUTH_PASSWORD = 'UPDATE_AUTH_PASSWORD';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export interface IActions {
  UPDATE_AUTH_EMAIL: {
    type: typeof UPDATE_AUTH_EMAIL;
    payload: { email: string };
  };
  UPDATE_AUTH_PASSWORD: {
    type: typeof UPDATE_AUTH_PASSWORD;
    payload: { password: string };
  };
  LOGIN_REQUEST: { type: typeof LOGIN_REQUEST };
  LOGIN_FAILURE: {
    type: typeof LOGIN_FAILURE;
    payload: { errors: Array<any> };
  };
  LOGIN_SUCCESS: {
    type: typeof LOGIN_SUCCESS;
    payload: { currentUser: User };
  };
}

export type IAction = IActions[keyof IActions];

export const updateAuthEmail = (email: string) => ({
  type: UPDATE_AUTH_EMAIL as typeof UPDATE_AUTH_EMAIL,
  payload: { email },
});

export const updateAuthPassword = (password: string) => ({
  type: UPDATE_AUTH_PASSWORD as typeof UPDATE_AUTH_PASSWORD,
  payload: { password },
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST as typeof LOGIN_REQUEST,
});

export const loginFailure = (errors: Array<any>) => ({
  type: LOGIN_FAILURE as typeof LOGIN_FAILURE,
  payload: { errors },
});

export const loginSuccess = (currentUser: any) => ({
  type: LOGIN_SUCCESS as typeof LOGIN_SUCCESS,
  payload: { currentUser },
});

export const login = (email: string, password: string) => async (
  dispatch: Dispatch<{}>,
) => {
  dispatch(loginRequest());
  try {
    const response = await AuthAgent.login(email, password);
    const json = await response.json();
    if (response.status === 200) {
      dispatch(loginSuccess(json.user));
      dispatch(push('/'));
    } else {
      dispatch(loginFailure(json.errors));
    }
  } catch (e) {
    dispatch(loginFailure([{ SystemError: 'has occured.' }]));
  }
};
