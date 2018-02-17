import { App } from './App';
import { Home, Login, NotFound } from './components/pages';

export const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
];
