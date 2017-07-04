// @flow

import { createAction } from 'redux-actions';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const fetchPostsRequest = createAction(FETCH_POSTS_REQUEST);
export const fetchPostsFailure = createAction(FETCH_POSTS_FAILURE);
export const fetchPostsSuccess = createAction(FETCH_POSTS_SUCCESS);

export const fetchPostsAsync = () => dispatch => {
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
