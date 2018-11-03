import * as React from "react";
import { withNamespaces, WithNamespaces } from "react-i18next";

export type ViewProps = {};

export type ActionProps = {
  onLogoClick: () => void;
  onHomeClick: () => void;
  onLoginClick: () => void;
};

type Props = ViewProps & ActionProps;

type ComposedProps = Props & WithNamespaces;

const Component: React.SFC<ComposedProps> = ({
  onLogoClick,
  onHomeClick,
  onLoginClick,
  t
}) => (
  <nav className="navbar navbar-light">
    <div className="container">
      <div className="navbar-brand" onClick={onLogoClick}>
        {t("common.appName")}
      </div>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <div className="nav-link" onClick={onHomeClick}>
            {t("common.home")}
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={onLoginClick}>
            {t("common.login")}
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export const Header = withNamespaces()(Component);
