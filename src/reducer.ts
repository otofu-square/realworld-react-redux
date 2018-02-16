import { combineReducers } from 'redux';

import { counterReducer, CounterState } from './modules/counter';
import { articleReducer, ArticleState } from './modules/article';

export type ReduxState = {
  counter: CounterState;
  article: ArticleState;
};

export const rootReducer = combineReducers<ReduxState>({
  counter: counterReducer,
  article: articleReducer,
});
