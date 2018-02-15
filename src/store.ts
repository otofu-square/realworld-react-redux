import { createStore } from 'redux';

import { rootReducer, ReduxState } from './rootReducer';

export const store = createStore<ReduxState>(rootReducer);
