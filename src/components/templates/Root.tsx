import * as React from 'react';

import { Header } from '../../containers/Header';

export const Root = ({ children }: React.Props<{}>) => (
  <>
    <Header />
    {children}
  </>
);
