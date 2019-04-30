import * as React from "react";
import { useTranslation } from "react-i18next";

export type ViewProps = {};

export type ActionProps = {
  onLogoClick: () => void;
  onHomeClick: () => void;
  onLoginClick: () => void;
};

type Props = ViewProps & ActionProps;

export const Header: React.FC<Props> = ({
  onLogoClick,
  onHomeClick,
  onLoginClick
}) => {
  const { t } = useTranslation();
  return (
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
};
