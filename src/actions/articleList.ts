import { Dispatch } from 'redux';
import { createAction, ActionFunction1 } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';

import { Article } from '../models/article';
import { articleListState as State } from '../models/state';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export interface IActions {
  FETCH_POSTS_REQUEST: { type: typeof FETCH_POSTS_REQUEST };
  FETCH_POSTS_FAILURE: { type: typeof FETCH_POSTS_FAILURE };
  FETCH_POSTS_SUCCESS: {
    type: typeof FETCH_POSTS_SUCCESS;
    payload: { articles: Array<Article> };
  };
}

export type IAction = IActions[keyof IActions];

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST as typeof FETCH_POSTS_REQUEST,
});

export const fetchPostsFailure = () => ({
  type: FETCH_POSTS_FAILURE as typeof FETCH_POSTS_FAILURE,
});

export const fetchPostsSuccess = (payload: { articles: Array<Article> }) => ({
  type: FETCH_POSTS_SUCCESS as typeof FETCH_POSTS_SUCCESS,
  payload,
});

export const fetchPostsAsync = () => (dispatch: Dispatch<State>) => {
  const endpoint = 'https://conduit.productionready.io/api/articles?limit=10';
  dispatch(fetchPostsRequest());
  fetch(endpoint).then(res => res.json()).then(
    res => {
      dispatch(fetchPostsSuccess(res));
    },
    () => {
      dispatch(fetchPostsFailure());
    },
  );
};
