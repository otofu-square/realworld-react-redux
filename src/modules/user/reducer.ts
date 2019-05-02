import { Reducer } from "redux";
import { User } from "./types";
import { Actions } from "./actions";
import { actionTypes } from "./actionTypes";

export type State = {
  user: User | null;
  loading: boolean;
};

const initialState = {
  user: null,
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
    case actionTypes.CREATE_SUCCESS:
      return { ...state, user: action.payload };
    default: {
      const _: never = action;
      return state;
    }
  }
};
