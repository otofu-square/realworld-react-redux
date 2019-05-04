import {
  useDispatch as _useDispatch,
  useSelector as _useSelector
} from "react-redux";
import { Dispatch, ReduxState } from "./types";

type UseDispatch = () => Dispatch;
// @ts-ignore
export const useDispatch: UseDispatch = _useDispatch;

type UseSelector = <TSelected>(
  selector: (state: ReduxState) => TSelected,
  deps?: ReadonlyArray<any>
) => TSelected;
// @ts-ignore
export const useSelector: UseSelector = _useSelector;
