import * as React from 'react';

import Header from './components/Header';
import Home from './pages/Home';

const App: React.StatelessComponent = () =>
  <div>
    <Header appName={'Conduit'} />;
    <Home appName={'Conduit'} />
  </div>;

export default App;
