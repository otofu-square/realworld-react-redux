import { Reducer } from "redux";
import { Article } from "./types";
import { Actions } from "./actions";
import { actionTypes } from "./actionTypes";

export type State = {
  articles: Article[];
  loading: boolean;
};

const initialState = {
  articles: [],
  loading: false
};

export const reducer: Reducer<State> = (
  state = initialState,
  action: Actions
) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return { ...state, loading: true };
    case actionTypes.STOP_LOADING:
      return { ...state, loading: false };
    case actionTypes.FETCH_SUCCESS:
      return { ...state, articles: action.payload };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;
      return state;
    }
  }
};
