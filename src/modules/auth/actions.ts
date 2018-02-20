import { User } from './types';
import {
  START_LOADING,
  STOP_LOADING,
  LOGIN,
  LOGIN_SUCCESS,
} from './actionTypes';

export interface Actions {
  START_LOADING: { type: typeof START_LOADING };
  STOP_LOADING: { type: typeof STOP_LOADING };
  LOGIN: {
    type: typeof LOGIN;
    payload: {
      email: string;
      password: string;
    };
  };
  LOGIN_SUCCESS: {
    type: typeof LOGIN_SUCCESS;
    payload: User;
  };
}

export type Action = Actions[keyof Actions];

export const actions = {
  startLoading: (): Actions['START_LOADING'] => ({ type: START_LOADING }),
  stopLoading: (): Actions['STOP_LOADING'] => ({ type: STOP_LOADING }),
  login: (email: string, password: string): Actions['LOGIN'] => ({
    type: LOGIN,
    payload: { email, password },
  }),
  loginSuccess: (user: User): Actions['LOGIN_SUCCESS'] => ({
    type: LOGIN_SUCCESS,
    payload: user,
  }),
};
