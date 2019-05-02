import * as api from "./api";
import { actions } from "./actions";
import { ThunkAction } from "../../redux";

type Fetch = () => ThunkAction<Promise<void>>;
const fetch: Fetch = () => async dispatch => {
  try {
    dispatch(actions.startLoading());
    const response = await api.get();
    dispatch(actions.fetchSuccess(response.data.articles));
  } catch (e) {
    // @ts-ignore
  } finally {
    dispatch(actions.stopLoading());
  }
};

export const operations = {
  fetch
};
