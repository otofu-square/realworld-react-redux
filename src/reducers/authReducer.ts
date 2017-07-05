import { Action } from 'redux';

import { authState as State } from '../models/state';
import {
  UPDATE_AUTH_EMAIL,
  UPDATE_AUTH_PASSWORD,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  IAction,
} from '../actions/auth';

const initialState: State = {
  email: null,
  password: null,
  isAuthenticated: false,
};

const reducer = (state: State = initialState, action: IAction): State => {
  switch (action.type) {
    case UPDATE_AUTH_EMAIL:
      return { ...state, email: state.email };
    case UPDATE_AUTH_PASSWORD:
      return { ...state, password: state.password };
    case LOGIN_REQUEST:
      return state;
    case LOGIN_FAILURE:
      return { ...state, email: null, password: null };
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
};

export default reducer;
