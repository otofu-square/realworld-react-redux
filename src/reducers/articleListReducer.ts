import { Action } from 'redux';

import { articleListState as State } from '../models/state';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
  IAction,
} from '../actions/articleList';

const initialState: State = {
  articles: null,
};

const reducer = (state: State = initialState, action: IAction) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return state;
    case FETCH_POSTS_FAILURE:
      return state;
    case FETCH_POSTS_SUCCESS:
      return { ...state, articles: action.payload.articles };
    default:
      return state;
  }
};

export default reducer;
