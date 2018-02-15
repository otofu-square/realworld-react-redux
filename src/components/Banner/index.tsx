import * as React from 'react';
import { translate, InjectedTranslateProps } from 'react-i18next';

type Props = InjectedTranslateProps;

const Component = ({ t }: Props) => (
  <div className="banner">
    <div className="container">
      <h1 className="logo-font">{t('common.appName')}</h1>
      <p>{t('common.bannerMessage')}</p>
    </div>
  </div>
);

export const Banner = translate()(Component);
