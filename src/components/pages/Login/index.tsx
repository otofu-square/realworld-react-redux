import * as React from 'react';
import { translate, InjectedTranslateProps } from 'react-i18next';

type Props = InjectedTranslateProps;

export const Component = ({ t }: Props) => (
  <div className="auth-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign In</h1>
          <p className="text-xs-center">
            <a>{t('login.message')}</a>
          </p>
          <form>
            <fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder={t('login.emailPlaceHolder')}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder={t('login.passwordPlaceHolder')}
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
              >
                {t('login.signInLabel')}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export const Login = translate()(Component);
