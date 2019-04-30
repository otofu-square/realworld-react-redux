import { all, fork } from "redux-saga/effects";
import { articleSagas } from "../modules/article";

export function* rootSaga() {
  yield all([fork(articleSagas)]);
}
