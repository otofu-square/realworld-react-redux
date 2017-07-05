import { createStore, combineReducers, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';

import appInfoReducer from './reducers/appInfoReducer';
import articleListReducer from './reducers/articleListReducer';

const reducer = combineReducers({
  appInfo: appInfoReducer,
  articleList: articleListReducer,
});
const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
