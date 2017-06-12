// @flow

import { connect } from 'react-redux';

import Checkbox from '../components/Checkbox';

const mapStateToProps = state => ({
  checked: state.checked,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
