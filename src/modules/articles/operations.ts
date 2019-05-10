import * as api from "./api";
import { actions } from "./actions";
import { ThunkAction } from "~/redux";

type Fetch = () => ThunkAction<Promise<void>>;
const fetch: Fetch = () => async dispatch => {
  try {
    dispatch(actions.startLoading());
    const response = await api.get();
    dispatch(actions.fetchSuccess(response.articles));
  } catch (e) {
    // NOTE: catch error in view component
    const errorResponse = await e.response.json();
    return errorResponse;
  } finally {
    dispatch(actions.stopLoading());
  }
};

export const operations = {
  fetch
};
