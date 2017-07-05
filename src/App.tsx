import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './containers/Home';
import Login from './pages/Login';

const App = () =>
  <HashRouter>
    <div>
      <Header appName={'Conduit'} />;
      <Switch>
        <Route exact path="/" component={Home as any} />
        <Route path="/login" component={Login as any} />
      </Switch>
    </div>
  </HashRouter>;

export default App;
