import { connect } from 'react-redux';

import Home from '../pages/Home';
import { GlobalState } from '../models/state';

const mapStateToProps = (state: GlobalState) => ({
  appName: state.appInfo.appName,
});

export default connect(mapStateToProps)(Home);
