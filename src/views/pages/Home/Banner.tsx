import * as React from "react";
import { useTranslation } from "react-i18next";

export const Banner: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{t("common.appName")}</h1>
        <p>{t("common.bannerMessage")}</p>
      </div>
    </div>
  );
};
