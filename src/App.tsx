import * as React from 'react';
import { renderRoutes } from 'react-router-config';

import { Header } from './containers/Header';

export const App = ({ route }: any) => (
  <>
    <Header />
    {renderRoutes(route.routes)}
  </>
);
