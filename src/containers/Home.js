// @flow

import { connect } from 'react-redux';

import agent from '../agent';
import Home from '../components/Home';
import { fetchPostsAsync } from '../actions/home';
import { withLifeCycle } from '../highorders/lifecycle';

const mapStateToProps = state => ({
  appName: state.appName,
});

export default connect(mapStateToProps)(
  withLifeCycle({
    /* eslint-disable immutable/no-this */
    componentWillMount: () => this.props.dispatch(fetchPostsAsync()),
  })(Home),
);
