// @flow

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ appName: state.appName });
const mapDispatchToProps = () => ({});

type Props = {
  appName: string,
};

const App = ({ appName }: Props) =>
  <div>
    {appName}
  </div>;

export default connect(mapStateToProps, mapDispatchToProps)(App);
