import React from 'react'
import { connect } from 'react-redux'

import Header from './components/Header'
import Home from './containers/Home'

type Props = {
  appName: string,
}

const mapStateToProps = state => ({
  appName: state.appName,
})

const App = ({ appName }: Props) => (
  <div>
    <Header appName={appName} />
    <Home />
  </div>
)

export default connect(mapStateToProps, () => ({}))(App)
