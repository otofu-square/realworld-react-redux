// @flow

import React from 'react';

import Banner from '../components/Banner';
import MainView from '../components/MainView';

type Props = {
  appName: string,
};

const Home = ({ appName }: Props) =>
  <div className="home-page">
    <Banner appName={appName} />
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
  </div>;

export default Home;