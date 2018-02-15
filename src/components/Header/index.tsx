import * as React from 'react';
import { translate, InjectedTranslateProps } from 'react-i18next';

type Props = InjectedTranslateProps;

const Component = ({ t }: Props) => (
  <nav className="navbar navbar-light">
    <div className="container">
      <a className="navbar-brand">{t('common.appName')}</a>
    </div>
  </nav>
);

export const Header = translate()(Component);
