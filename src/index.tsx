import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';

// import './index.css';
import App from './App';

import reducer from './reducers/articleListReducer';

const store = createStore(reducer, applyMiddleware(thunk));

const Root = () =>
  <Provider store={store}>
    <App />
  </Provider>;

ReactDOM.render(<Root />, document.getElementById('root'));
