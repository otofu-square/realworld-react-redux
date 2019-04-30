import * as React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { Root } from "./views/templates";

export const App: React.FC<RouteConfigComponentProps> = ({ route }) => (
  <Root>{renderRoutes(route!.routes)}</Root>
);
