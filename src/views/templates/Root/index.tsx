import * as React from 'react';

import { Header } from './Header';

export type ViewProps = {};
export type ActionProps = {
  onLogoClick: () => void;
  onHomeClick: () => void;
  onLoginClick: () => void;
};
type Props = ViewProps & ActionProps;
type ComposedProps = Props & React.Props<{}>;

export const Root = ({
  onLogoClick,
  onHomeClick,
  onLoginClick,
  children,
}: ComposedProps) => (
  <>
    <Header
      onLogoClick={onLogoClick}
      onHomeClick={onHomeClick}
      onLoginClick={onLoginClick}
    />
    {children}
  </>
);
