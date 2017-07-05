import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import './index.css';
import App from './App';
import store from './store';

console.log(store.getState());

const Root = () =>
  <Provider store={store}>
    <App />
  </Provider>;

ReactDOM.render(<Root />, document.getElementById('root'));
