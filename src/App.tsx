import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { Root } from '@/views/templates';

export const App = ({ route }: any) => (
  <Root>{renderRoutes(route.routes)}</Root>
);
