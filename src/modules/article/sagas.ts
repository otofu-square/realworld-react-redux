import { all, call, fork, put } from 'redux-saga/effects';

import { get, GetResponse } from './api';
import { actions } from './actions';

function* fetch() {
  try {
    yield put(actions.startLoading());
    const response: GetResponse = yield call(get);
    yield put(actions.fetchSuccess(response.data.articles));
  } catch (e) {
    // @ts-ignore
  } finally {
    yield put(actions.stopLoading());
  }
}

export function* sagas() {
  yield all([fork(fetch)]);
}
