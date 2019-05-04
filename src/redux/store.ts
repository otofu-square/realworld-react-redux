import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { createRootReducer } from "./createRootReducer";
import { ReduxState, ReduxAction } from "./types";

export const history = createBrowserHistory();

export const store = createStore<ReduxState, ReduxAction, {}, {}>(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, routerMiddleware(history))
  )
);
