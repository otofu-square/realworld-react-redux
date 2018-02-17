import { Reducer } from 'redux';

import { Article } from './types';
import { Action } from './actions';
import { START_LOADING, STOP_LOADING, FETCH_SUCCESS } from './actionTypes';

export type State = {
  articles: Article[];
  loading: boolean;
};

const initialState = {
  articles: [],
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
