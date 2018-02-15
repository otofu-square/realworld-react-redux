import { connect, MapDispatchToProps } from 'react-redux';

import { counterActions } from '../modules/counter';
import { ReduxState } from '../rootReducer';
import {
  Counter as Component,
  ActionProps,
  ViewProps,
} from '../components/Counter';

const mapStateToProps = ({ counter: { count } }: ReduxState): ViewProps => ({
  count,
});

const mapDispatchToProps: MapDispatchToProps<ActionProps, {}> = dispatch => ({
  onAddClick: () => dispatch(counterActions.add()),
  onSubClick: () => dispatch(counterActions.sub()),
});

export const Counter = connect(mapStateToProps, mapDispatchToProps)(Component);
