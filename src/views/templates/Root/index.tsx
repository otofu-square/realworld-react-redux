import * as React from "react";
import { Root } from "./views";
import { useHooks } from "./hooks";

export const RootContainer: React.FC = ({ children }) => {
  const { onLogoClick, onHomeClick, onSigninClick } = useHooks();
  return (
    <Root
      children={children}
      onLogoClick={onLogoClick}
      onHomeClick={onHomeClick}
      onSigninClick={onSigninClick}
    />
  );
};
