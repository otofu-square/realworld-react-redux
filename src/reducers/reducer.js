// @flow

type State = {
  appName: string,
  atricles: null,
}

const defaultState = {
  appName: 'CONDUIT',
  articles: null,
}

const reducer = (state: State = defaultState, action) => state

export default reducer
