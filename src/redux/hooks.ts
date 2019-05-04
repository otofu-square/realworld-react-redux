import {
  // @ts-ignore
  useDispatch as _useDispatch,
  // @ts-ignore
  useSelector as _useSelector
} from "react-redux";
import { Dispatch, ReduxState } from "./types";

type UseDispatch = () => Dispatch;
export const useDispatch: UseDispatch = _useDispatch;

type UseSelector = <TSelected>(
  selector: (state: ReduxState) => TSelected,
  deps?: ReadonlyArray<any>
) => TSelected;
export const useSelector: UseSelector = _useSelector;
