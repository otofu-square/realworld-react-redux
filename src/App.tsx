import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

import Header from './components/Header';
import Home from './containers/Home';
import Login from './containers/Login';
import { appInfoState, GlobalState } from './models/state';
import { history } from './store';

interface StateProps {
  appName: string;
}

const mapStateToProps = (state: GlobalState) => ({
  appName: state.appInfo.appName,
});

const App = ({ appName }: StateProps) =>
  <ConnectedRouter history={history}>
    <div>
      <Header appName={appName} />;
      <Switch>
        <Route exact path="/" component={Home as any} />
        <Route path="/login" component={Login as any} />
      </Switch>
    </div>
  </ConnectedRouter>;

export default connect(mapStateToProps)(App);
