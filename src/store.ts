import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { rootReducer } from '@/reducer';
import { rootSaga } from '@/sagas';
import { ReduxState, ReduxAction } from '@/types/redux';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

export const store = createStore<ReduxState, ReduxAction, {}, {}>(
  rootReducer,
  applyMiddleware(sagaMiddleware, routerMiddleware(history)),
);

sagaMiddleware.run(rootSaga);
