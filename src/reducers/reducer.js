// @flow

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from '../actions/articleList';

const initialState = {
  appName: 'Conduit',
  articles: null,
};

const reducer = (state = initialState, action) => {
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
