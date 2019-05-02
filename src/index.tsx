import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { renderRoutes } from "react-router-config";
import { store, history } from "./redux";
import { routes } from "./routes";
import "./i18n";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
