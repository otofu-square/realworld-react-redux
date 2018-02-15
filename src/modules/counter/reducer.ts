import { Reducer } from 'redux';
import { ADD, SUB, Action } from './action';

export type State = {
  count: number;
};

const initialState = { count: 0 };

export const reducer: Reducer<State> = (
  state = initialState,
  action: Action,
) => {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUB:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
