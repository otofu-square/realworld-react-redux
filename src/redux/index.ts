import {
  ReduxAction,
  ReduxState,
  ThunkAction,
  Dispatch,
  CreatorsToActions
} from "./types";

export type ReduxAction = ReduxAction;
export type ReduxState = ReduxState;
export type ThunkAction<R> = ThunkAction<R>;
export type Dispatch = Dispatch;
export type CreatorsToActions<T> = CreatorsToActions<T>;

export { store, history } from "./store";
export { useDispatch, useSelector } from "./hooks";
