// @flow

import { HOME_PAGE_LOADED } from '../actions/home';

const initialState = {
  appName: 'Conduit',
  articles: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return { ...state, articles: action.payload };
    default:
      return state;
  }
};

export default reducer;
