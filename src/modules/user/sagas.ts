import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as api from './api';
import { actions, Actions } from './actions';
import { LOGIN } from './actionTypes';

function* login({ payload: { email, password } }: Actions['LOGIN']) {
  try {
    yield put(actions.startLoading());
    const response: api.LoginResponse = yield call(api.login, email, password);
    yield put(actions.loginSuccess(response.data.user));
  } catch (e) {
    // @ts-ignore
  } finally {
    yield put(actions.stopLoading());
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN, login);
}

export function* sagas() {
  yield all([fork(watchLogin)]);
}
