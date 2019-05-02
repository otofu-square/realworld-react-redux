import { Dispatch as _Dispatch } from "redux";
import { ThunkAction as _ThunkAction, ThunkDispatch } from "redux-thunk";
import { ReduxAction as _ReduxAction } from "./actions";
import { ReduxState as _ReduxState } from "./createRootReducer";

export type ReduxAction = _ReduxAction;
export type ReduxState = _ReduxState;
export type ThunkAction<R> = _ThunkAction<R, ReduxState, {}, ReduxAction>;
export type Dispatch = ThunkDispatch<ReduxState, {}, ReduxAction>;

type Unwrap<T> = T extends { [K in keyof T]: infer U } ? U : never;

type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : never
};

export type CreatorsToActions<T> = Unwrap<ReturnTypes<T>>;
