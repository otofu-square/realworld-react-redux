// @flow

type State = {
  appName: string,
  atricles: null,
}

const defaultState = {
  appName: 'CONDUIT',
  articles: null,
}

const reducer = (state: State = defaultState, action: { type: string, paylaod: any }) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
