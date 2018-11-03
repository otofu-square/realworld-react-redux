import * as React from "react";
import { Header } from "./Header";

export type ViewProps = {
  children: React.ReactNode;
};

export type ActionProps = {
  onLogoClick: () => void;
  onHomeClick: () => void;
  onLoginClick: () => void;
};

type Props = ViewProps & ActionProps;

export const Root = ({
  children,
  onLogoClick,
  onHomeClick,
  onLoginClick
}: Props) => (
  <>
    <Header
      onLogoClick={onLogoClick}
      onHomeClick={onHomeClick}
      onLoginClick={onLoginClick}
    />
    {children}
  </>
);
