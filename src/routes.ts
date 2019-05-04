import { App } from "./App";
import { Home, Signin, NotFound, Signup } from "./views/pages";
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
        path: "/signin",
        component: Signin
      },
      {
        path: "/signup",
        component: Signup
      },
      {
        path: "*",
        component: NotFound
      }
    ]
  }
];
