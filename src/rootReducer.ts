import { combineReducers } from 'redux';

import { counterReducer, CounterState } from './modules/counter';

export type ReduxState = {
  counter: CounterState;
};

export const rootReducer = combineReducers<ReduxState>({
  counter: counterReducer,
});
