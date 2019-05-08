import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { renderRoutes } from "react-router-config";
import { store, history } from "./redux";
import { routes } from "./routes";
import { Root } from "./views/templates";

export const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root>{renderRoutes(routes)}</Root>
    </ConnectedRouter>
  </Provider>
);
