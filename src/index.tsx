import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as thunk from 'redux-thunk';

// import './index.css';
import App from './App';

// import reducer from './reducers/reducer';

// const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
  <App appName={'Conduit'} />,
  // </Provider>,
  document.getElementById('root'),
);
