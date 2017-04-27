// @flow

import { TOGGLE } from '../actions/action'

type State = {
  checked: boolean,
}

const defaultState = {
  checked: false
}

const reducer = (state: State = defaultState, action) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, checked: !state.checked }
    default:
      return state
  }
}

export default reducer
