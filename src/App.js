import React from 'react'
import { connect } from 'react-redux'

import Header from './components/Header'
import Home from './containers/Home'

const mapStateToProps = state => ({
  appName: state.appName
})

const App = ({ appName }) =>
  <div>
    <Header appName={appName}/>
    <Home />
  </div>

export default connect(mapStateToProps, () => ({}))(App)
