import * as React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './containers/Home';
import Login from './containers/Login';
import { appInfoState, GlobalState } from './models/state';

interface StateProps {
  appName: string;
}

const mapStateToProps = (state: GlobalState) => ({
  appName: state.appInfo.appName,
});

const App = ({ appName }: StateProps) =>
  <HashRouter>
    <div>
      <Header appName={appName} />;
      <Switch>
        <Route exact path="/" component={Home as any} />
        <Route path="/login" component={Login as any} />
      </Switch>
    </div>
  </HashRouter>;

export default connect(mapStateToProps)(App);
