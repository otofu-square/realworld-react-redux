// @flow

import { connect } from 'react-redux';

import { toggle } from '../actions/action';
import Button from '../components/Button';

const mapStateToProps = () => ({
  label: 'This is button component',
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(toggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
