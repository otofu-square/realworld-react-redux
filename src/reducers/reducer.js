// @flow

import { TOGGLE } from '../actions/action';

const initialState = { checked: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, checked: !state.checked };
    default:
      return state;
  }
};

export default reducer;
