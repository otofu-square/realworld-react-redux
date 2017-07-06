import * as React from 'react';
import { DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import Banner from '../components/Banner';
import MainView from '../components/MainView';

interface StateProps extends RouteComponentProps<any> {
  appName: string;
}

const Home: React.StatelessComponent<DispatchProp<{}> & StateProps> = ({
  appName,
}) =>
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
