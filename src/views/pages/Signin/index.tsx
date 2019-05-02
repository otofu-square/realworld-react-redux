import * as React from "react";
import { useTranslation } from "react-i18next";

export const Signin: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <a>{t("signin.message")}</a>
            </p>
            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder={t("signin.emailPlaceHolder")}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder={t("signin.passwordPlaceHolder")}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  {t("signin.signInLabel")}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
