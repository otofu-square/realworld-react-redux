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
import { User } from './models/user';

interface StateProps {
  appName: string;
  currentUser: User;
}

const mapStateToProps = (state: GlobalState) => ({
  appName: state.appInfo.appName,
  currentUser: state.auth.currentUser,
});

const App = ({ appName, currentUser }: StateProps) =>
  <ConnectedRouter history={history}>
    <div>
      <Header appName={appName} currentUser={currentUser} />;
      <Switch>
        <Route exact path="/" component={Home as any} />
        <Route path="/login" component={Login as any} />
      </Switch>
    </div>
  </ConnectedRouter>;

export default connect(mapStateToProps)(App as any);
