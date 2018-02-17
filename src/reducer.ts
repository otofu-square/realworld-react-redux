import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

import { articleReducer, ArticleState } from './modules/article';

export type ReduxState = {
  article: ArticleState;
  router: RouterState;
};

export const rootReducer = combineReducers<ReduxState>({
  article: articleReducer,
  router: routerReducer,
});
