// @flow

import { connect } from 'react-redux';

import Home from '../components/Home';

const mapStateToProps = state => ({
  appName: state.appName,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
