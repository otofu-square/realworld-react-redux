import { createStore, combineReducers, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';

import appInfoReducer from './reducers/appInfoReducer';
import articleListReducer from './reducers/articleListReducer';
import authReducer from './reducers/authReducer';

const reducer = combineReducers({
  appInfo: appInfoReducer,
  articleList: articleListReducer,
  auth: authReducer,
});

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
