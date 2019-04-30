import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import { createRootReducer } from "./createRootReducer";
import { rootSaga } from "./sagas";
import { ReduxState, ReduxAction } from "./types";

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

export const store = createStore<ReduxState, ReduxAction, {}, {}>(
  createRootReducer(history),
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

sagaMiddleware.run(rootSaga);
