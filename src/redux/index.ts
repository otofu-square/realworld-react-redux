import {
  ReduxAction,
  ReduxState,
  DispatchProp,
  MapDispatchToProps
} from "./types";

export type ReduxAction = ReduxAction;
export type ReduxState = ReduxState;
export type DispatchProp = DispatchProp;
export type MapDispatchToProps<AP> = MapDispatchToProps<AP>;

export { store, history } from "./store";
