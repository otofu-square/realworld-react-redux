import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { get, GetResponse } from './api';
import { actions } from './actions';
import { FETCH } from './actionTypes';

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

function* watchFetch() {
  yield takeLatest(FETCH, fetch);
}

export function* sagas() {
  yield all([fork(watchFetch)]);
}
