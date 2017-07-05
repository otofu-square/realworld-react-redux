import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './containers/Home';

const App = () =>
  <HashRouter>
    <div>
      <Header appName={'Conduit'} />;
      <Switch>
        <Route exact path="/" component={Home as any} />
      </Switch>
    </div>
  </HashRouter>;

export default App;
