import * as React from 'react';

import Banner from '../components/Banner';
import MainView from '../components/MainView';

interface Props {
  appName: string;
}

const Home: React.StatelessComponent<Props> = ({ appName }: Props) =>
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
