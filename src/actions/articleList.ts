import { Dispatch } from 'redux';

import { Article } from '../models/article';
import { articleListState as State } from '../models/state';
import { Article as ArticleAgent } from '../agent';

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

export const fetchPostsAsync = () => async (dispatch: Dispatch<{}>) => {
  dispatch(fetchPostsRequest());
  try {
    const response = await ArticleAgent.all(10);
    const json = await response.json();
    dispatch(fetchPostsSuccess(json));
  } catch (e) {
    dispatch(fetchPostsFailure());
  }
};
