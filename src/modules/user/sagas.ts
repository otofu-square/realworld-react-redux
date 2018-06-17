import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as api from './api';
import { actions, Actions } from './actions';
import { CREATE } from './actionTypes';

function* create({ payload: { email, password } }: Actions['CREATE']) {
  try {
    yield put(actions.startLoading());
    const response: api.CreateResponse = yield call(
      api.create,
      email,
      password,
    );
    yield put(actions.createSuccess(response.data.user));
  } catch (e) {
    // @ts-ignore
  } finally {
    yield put(actions.stopLoading());
  }
}

function* watchCreate() {
  yield takeLatest(CREATE, create);
}

export function* sagas() {
  yield all([fork(watchCreate)]);
}
