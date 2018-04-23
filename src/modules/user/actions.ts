import { User } from './types';
import {
  START_LOADING,
  STOP_LOADING,
  CREATE,
  CREATE_SUCCESS,
} from './actionTypes';

export interface Actions {
  START_LOADING: { type: typeof START_LOADING };
  STOP_LOADING: { type: typeof STOP_LOADING };
  CREATE: {
    type: typeof CREATE;
    payload: {
      email: string;
      password: string;
    };
  };
  CREATE_SUCCESS: {
    type: typeof CREATE_SUCCESS;
    payload: User;
  };
}

export type Action = Actions[keyof Actions];

export const actions = {
  startLoading: (): Actions['START_LOADING'] => ({ type: START_LOADING }),
  stopLoading: (): Actions['STOP_LOADING'] => ({ type: STOP_LOADING }),
  create: (email: string, password: string): Actions['CREATE'] => ({
    type: CREATE,
    payload: { email, password },
  }),
  createSuccess: (user: User): Actions['CREATE_SUCCESS'] => ({
    type: CREATE_SUCCESS,
    payload: user,
  }),
};
