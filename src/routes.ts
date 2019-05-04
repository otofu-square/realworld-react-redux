import { App } from "./App";
import { Home, Signin, NotFound, Signup } from "./views/pages";
import { RouteConfig } from "react-router-config";

export const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/signin",
    exact: true,
    component: Signin
  },
  {
    path: "/signup",
    exact: true,
    component: Signup
  },
  {
    path: "*",
    component: NotFound
  }
];
