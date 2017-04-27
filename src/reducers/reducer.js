// @flow

import { TOGGLE } from '../actions/action'

type State = {
  appName: string,
  atricles: null
}

const defaultState = {
  appName: 'CONDUIT',
  articles: null,
}

const reducer = (state: State = defaultState, action) => {
  return state
}

export default reducer
