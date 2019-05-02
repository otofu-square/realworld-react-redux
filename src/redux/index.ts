import {
  ReduxAction,
  ReduxState,
  DispatchProp,
  MapDispatchToProps,
  CreatorsToActions
} from "./types";

export type ReduxAction = ReduxAction;
export type ReduxState = ReduxState;
export type DispatchProp = DispatchProp;
export type MapDispatchToProps<AP> = MapDispatchToProps<AP>;
export type CreatorsToActions<T> = CreatorsToActions<T>;

export { store, history } from "./store";
