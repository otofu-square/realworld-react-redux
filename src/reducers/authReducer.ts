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
  email: '',
  password: '',
  isAuthenticated: false,
  currentUser: null,
  errors: [],
};

const reducer = (state: State = initialState, action: IAction): State => {
  switch (action.type) {
    case UPDATE_AUTH_EMAIL:
      return { ...state, email: action.payload.email };
    case UPDATE_AUTH_PASSWORD:
      return { ...state, password: action.payload.password };
    case LOGIN_REQUEST:
      return state;
    case LOGIN_FAILURE:
      return {
        ...state,
        email: '',
        password: '',
        currentUser: null,
        errors: action.payload.errors,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload.currentUser,
      };
    default:
      return state;
  }
};

export default reducer;
