import { DispatchProp as _DispatchProp } from 'react-redux';

import { ReduxAction as _ReduxAction } from '@/actions';
import { ReduxState as _ReduxState } from '@/reducer';

export type ReduxAction = _ReduxAction;
export type ReduxState = _ReduxState;
export type DispatchProp = _DispatchProp<ReduxAction>;
