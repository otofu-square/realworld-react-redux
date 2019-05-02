import { App } from "./App";
import { Home, Login, NotFound } from "./views/pages";
import { RouteConfig } from "react-router-config";

export const routes: RouteConfig[] = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/login",
        component: Login
      },
      {
        path: "*",
        component: NotFound
      }
    ]
  }
];
