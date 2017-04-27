// @flow

import { connect } from 'react-redux'

import Home from '../components/Home'

const mapStateToProps = state => ({
  appName: state.appName
})

export default connect(mapStateToProps)(Home)
