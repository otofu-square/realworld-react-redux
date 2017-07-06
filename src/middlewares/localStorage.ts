import { IAction } from '../actions/auth';
import { GlobalState } from '../models/state';

export const localStorageMiddleware = (store: GlobalState) => (next: any) => (
  action: IAction,
) => {
  if (action.type === 'LOGIN_SUCCESS') {
    window.localStorage.setItem('jwt', action.payload.currentUser.token);
  } else if (action.type === 'LOGIN_FAILURE') {
    window.localStorage.setItem('jwt', '');
  }
  next(action);
};
