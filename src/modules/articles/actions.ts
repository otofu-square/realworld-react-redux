import { Article } from "./types";
import { actionTypes } from "./actionTypes";
import { CreatorsToActions } from "../../redux";

const startLoading = () => ({
  type: actionTypes.START_LOADING
});

const stopLoading = () => ({
  type: actionTypes.STOP_LOADING
});

const fetchSuccess = (articles: Article[]) => ({
  type: actionTypes.FETCH_SUCCESS,
  payload: articles
});

export const actions = {
  startLoading,
  stopLoading,
  fetchSuccess
};

export type Actions = CreatorsToActions<typeof actions>;
