import { App } from './App';
import { Home } from './components/Home';
// import { Login } from './components/Login';
import { NotFound } from './components/NotFound';

export const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      // {
      //   path: '/login',
      //   exact: true,
      //   component: Login,
      // },
      {
        path: '*',
        exact: true,
        component: NotFound,
      },
    ],
  },
];
