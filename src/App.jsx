// @flow

import React from 'react';

import Header from './components/Header';
import Home from './containers/Home';

type Props = {
  appName: string,
};

const App = ({ appName }: Props) =>
  <div>
    <Header appName={appName} />
    <Home appName={appName} />
  </div>;

export default App;
