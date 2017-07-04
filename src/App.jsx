// @flow

import React from 'react';

import Header from './components/Header';
import Home from './containers/Home';

const App = () =>
  <div>
    <Header appName={'Conduit'} />
    <Home />
  </div>;

export default App;
