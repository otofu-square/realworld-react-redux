import { createStore, combineReducers } from 'redux';

import { Action } from './action';
import { reducer, State } from './reducer';

export type ReduxAction = Action;

export interface ReduxState {
  root: State;
}

const rootReducer = combineReducers<ReduxState>({
  root: reducer,
});

export const store = createStore<ReduxState>(rootReducer);
