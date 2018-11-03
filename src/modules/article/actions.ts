import { Article } from "./types";
import {
  START_LOADING,
  STOP_LOADING,
  FETCH,
  FETCH_SUCCESS
} from "./actionTypes";

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
  startLoading: (): Actions["START_LOADING"] => ({ type: START_LOADING }),
  stopLoading: (): Actions["STOP_LOADING"] => ({ type: STOP_LOADING }),
  fetch: (limit: number = 10): Actions["FETCH"] => ({
    type: FETCH,
    payload: limit
  }),
  fetchSuccess: (articles: Article[]): Actions["FETCH_SUCCESS"] => ({
    type: FETCH_SUCCESS,
    payload: articles
  })
};
