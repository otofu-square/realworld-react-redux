import { Action } from 'redux';

import { appInfoState as State } from '../models/state';

const initialState: State = {
  appName: 'Conduit',
  token: '',
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
