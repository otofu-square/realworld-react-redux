import * as React from "react";
import { Header } from "./Header";

export type ViewProps = {};

export type ActionProps = {
  onLogoClick: () => void;
  onHomeClick: () => void;
  onLoginClick: () => void;
};

type Props = ViewProps & ActionProps;

export const Root: React.FC<Props> = ({
  children,
  onLogoClick,
  onHomeClick,
  onLoginClick
}) => (
  <>
    <Header
      onLogoClick={onLogoClick}
      onHomeClick={onHomeClick}
      onLoginClick={onLoginClick}
    />
    {children}
  </>
);
