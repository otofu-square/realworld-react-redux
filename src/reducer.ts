import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

import { counterReducer, CounterState } from './modules/counter';
import { articleReducer, ArticleState } from './modules/article';

export type ReduxState = {
  counter: CounterState;
  article: ArticleState;
  router: RouterState;
};

export const rootReducer = combineReducers<ReduxState>({
  counter: counterReducer,
  article: articleReducer,
  router: routerReducer,
});
