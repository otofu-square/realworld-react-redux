import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducer';
import { rootSaga } from './sagas';
import { ReduxState } from './types/redux';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore<ReduxState>(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
