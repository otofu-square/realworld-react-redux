import { Action } from 'redux';

import { authState as State } from '../models/state';
import {
  UPDATE_REGISTER_EMAIL,
  UPDATE_REGISTER_PASSWORD,
  UPDATE_REGISTER_USERNAME,
  REGIST_REQUEST,
  REGIST_FAILURE,
  REGIST_SUCCESS,
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
    case UPDATE_REGISTER_EMAIL:
      return { ...state, email: action.payload.email };
    case UPDATE_REGISTER_PASSWORD:
      return { ...state, password: action.payload.password };
    case UPDATE_REGISTER_USERNAME:
      return { ...state, password: action.payload.password };
    case REGIST_REQUEST:
      return state;
    case REGIST_FAILURE:
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
