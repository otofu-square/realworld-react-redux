import { createStore, combineReducers, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';

import articleListReducer from './reducers/articleListReducer';

const reducer = combineReducers({
  articleList: articleListReducer,
});
const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
