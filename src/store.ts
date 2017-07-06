import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { default as thunk } from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import appInfoReducer from './reducers/appInfoReducer';
import articleListReducer from './reducers/articleListReducer';
import authReducer from './reducers/authReducer';

const reducer = combineReducers({
  appInfo: appInfoReducer,
  articleList: articleListReducer,
  auth: authReducer,
  router: <any>routerReducer,
});

export const history = createHistory();
export const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), applyMiddleware(routerMiddleware(history))),
);
