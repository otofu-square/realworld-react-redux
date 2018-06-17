import * as React from 'react';
import { translate, InjectedTranslateProps } from 'react-i18next';
import { FormikProps } from 'formik';

export type Values = {
  email: string;
  password: string;
};

type ComposedProps = FormikProps<Values> & InjectedTranslateProps;

const Component = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  t,
}: ComposedProps) => (
  <div className="auth-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign In</h1>
          <p className="text-xs-center">
            <a>{t('login.message')}</a>
          </p>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <fieldset className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder={t('login.emailPlaceHolder')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder={t('login.passwordPlaceHolder')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </fieldset>
              <button
                type="submit"
                className="btn btn-lg btn-primary pull-xs-right"
                disabled={isSubmitting}
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
