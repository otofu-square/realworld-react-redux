import * as React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
// import Home from './containers/Home';

interface Props {
  appName: string;
}

const App = ({ appName }: Props) =>
  <div>
    <Header appName={appName} />;
    <Home appName={appName} />
  </div>;

export default App;
