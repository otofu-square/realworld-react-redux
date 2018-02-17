import * as React from 'react';
import { renderRoutes } from 'react-router-config';

import { Header } from '../../containers/Header';

export const Root = ({ children }: React.Props<{}>) => (
  <>
    <Header />
    {children}
  </>
);
