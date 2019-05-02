import { DispatchProp as _DispatchProp } from "react-redux";
import { ReduxAction as _ReduxAction } from "./actions";
import { ReduxState as _ReduxState } from "./createRootReducer";

export type ReduxAction = _ReduxAction;
export type ReduxState = _ReduxState;
export type DispatchProp = _DispatchProp<ReduxAction>;
export type MapDispatchToProps<AP> = (_: DispatchProp) => AP;

type Unwrap<T> = T extends { [K in keyof T]: infer U } ? U : never;

type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : never
};

export type CreatorsToActions<T> = Unwrap<ReturnTypes<T>>;
