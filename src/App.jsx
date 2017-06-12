// @flow

import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';

const mapStateToProps = state => ({ appName: state.appName });
const mapDispatchToProps = () => ({});

type Props = {
  appName: string,
};

const App = ({ appName }: Props) =>
  <div>
    <Header appName={appName} />
  </div>;

export default connect(mapStateToProps, mapDispatchToProps)(App);
