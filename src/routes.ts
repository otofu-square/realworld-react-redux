import { App } from './App';
import { Home } from './containers/Home';
import { Login, NotFound } from './components/pages';

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
