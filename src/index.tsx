import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { renderRoutes } from "react-router-config";
import { store, history } from "./store";
import registerServiceWorker from "./registerServiceWorker";
import { routes } from "./routes";
import "./i18n";

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root") as HTMLElement);

registerServiceWorker();
