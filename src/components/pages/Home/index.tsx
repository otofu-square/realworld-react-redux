import * as React from 'react';
import { translate, InjectedTranslateProps } from 'react-i18next';

import { Banner } from '../../Banner';
import { MainView } from '../../MainView';

type Props = InjectedTranslateProps;

const Component = ({ t }: Props) => (
  <div className="home-page">
    <Banner />
    <div className="container page">
      <div className="row">
        <MainView />
        <div className="col-md-3">
          <div className="sidebar">
            <p>Popular Tags</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Home = translate()(Component);
