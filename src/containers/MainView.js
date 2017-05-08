// @flow

import { connect } from 'react-redux'

import MainView from '../components/MainView'

const mapStateToProps = state => ({
  articles: state.articles,
})

export default connect(mapStateToProps)(MainView)
