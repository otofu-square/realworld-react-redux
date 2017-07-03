// @flow

import { createAction } from 'redux-actions';
import agent from '../agent';

export const HOME_PAGE_LOADED = 'HOME_PAGE_LOADED';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const homePageLoaded = createAction(HOME_PAGE_LOADED);
export const fetchPostsRequest = createAction(FETCH_POSTS_REQUEST);
export const fetchPostsFailure = createAction(FETCH_POSTS_FAILURE);
export const fetchPostsSuccess = createAction(FETCH_POSTS_SUCCESS);
export const fetchPostsAsync = () => dispatch => {
  dispatch(fetchPostsRequest());
  agent.Articles.all().then(
    res => {
      dispatch(fetchPostsSuccess(res));
    },
    () => {
      dispatch(fetchPostsFailure());
    },
  );
};
