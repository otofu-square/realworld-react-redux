import { Article } from './types';

export const START_LOADING = 'article/START_LOADING';
export const STOP_LOADING = 'article/STOP_LOADING';
export const FETCH = 'article/FETCH';
export const FETCH_SUCCESS = 'article/FETCH_SUCCESS';

export interface Actions {
  START_LOADING: { type: typeof START_LOADING };
  STOP_LOADING: { type: typeof STOP_LOADING };
  FETCH: { type: typeof FETCH; payload: number };
  FETCH_SUCCESS: {
    type: typeof FETCH_SUCCESS;
    payload: Article[];
  };
}

export type Action = Actions[keyof Actions];

export const actions = {
  startLoading: (): Actions['START_LOADING'] => ({ type: START_LOADING }),
  stopLoading: (): Actions['STOP_LOADING'] => ({ type: STOP_LOADING }),
  fetch: (limit: number = 10): Actions['FETCH'] => ({
    type: FETCH,
    payload: limit,
  }),
  fetchSuccess: (articles: Article[]): Actions['FETCH_SUCCESS'] => ({
    type: FETCH_SUCCESS,
    payload: articles,
  }),
};
