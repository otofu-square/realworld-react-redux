import { connect, MapDispatchToProps } from 'react-redux';

import { actions } from '../action';
import { App as Component, ActionProps, ViewProps } from '../App';
import { ReduxState } from '../store';

const mapStateToProps = ({ root: { count } }: ReduxState): ViewProps => ({
  count,
});

const mapDispatchToProps: MapDispatchToProps<ActionProps, {}> = dispatch => ({
  onAddClick: () => dispatch(actions.add()),
  onSubClick: () => dispatch(actions.sub()),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(Component);
