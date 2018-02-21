import { Reducer } from 'redux';

import { User } from './types';
import { Action } from './actions';
import { START_LOADING, STOP_LOADING, LOGIN_SUCCESS } from './actionTypes';

export type State = {
  user: User | null;
  loading: boolean;
};

const initialState = {
  user: null,
  loading: false,
};

export const reducer: Reducer<State> = (
  state = initialState,
  action: Action,
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    case FETCH_SUCCESS:
      return { ...state, articles: action.payload };
    default:
      return state;
  }
};
