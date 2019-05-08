import React from "react";
import { Header, HandlerProps as HeaderHandlerProps } from "./Header";

type Props = HeaderHandlerProps;

export const Root: React.FC<Props> = ({
  children,
  onLogoClick,
  onHomeClick,
  onSigninClick
}) => (
  <>
    <Header
      onLogoClick={onLogoClick}
      onHomeClick={onHomeClick}
      onSigninClick={onSigninClick}
    />
    {children}
  </>
);
