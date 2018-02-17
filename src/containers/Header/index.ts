import { Dispatch } from 'redux';
import { connect, MapStateToProps } from 'react-redux';
import { push } from 'react-router-redux';

import {
  Header as Component,
  ViewProps,
  ActionProps,
} from '../../components/Header';
import { ReduxState, ReduxAction } from '../../types/redux';

const mapStateToProps: MapStateToProps<
  ViewProps,
  {},
  ReduxState
> = ({}) => ({});

type MapDispatchToProps = (_: Dispatch<ReduxAction>) => ActionProps;
const mapDispatchToProps: MapDispatchToProps = dispatch => ({
  onLogoClick: () => {
    dispatch(push('/'));
  },
  onHomeClick: () => {
    dispatch(push('/'));
  },
  onLoginClick: () => {
    dispatch(push('/login'));
  },
});

export const Header = connect(mapStateToProps, mapDispatchToProps)(Component);
