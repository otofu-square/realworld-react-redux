import { Dispatch } from 'redux';

export const UPDATE_AUTH_EMAIL = 'UPDATE_AUTH_EMAIL';
export const UPDATE_AUTH_PASSWORD = 'UPDATE_AUTH_PASSWORD';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export interface IActions {
  UPDATE_AUTH_EMAIL: {
    type: typeof UPDATE_AUTH_EMAIL;
    payload: { value: string };
  };
  UPDATE_AUTH_PASSWORD: {
    type: typeof UPDATE_AUTH_PASSWORD;
    payload: { value: string };
  };
  LOGIN_REQUEST: { type: typeof LOGIN_REQUEST };
  LOGIN_FAILURE: { type: typeof LOGIN_FAILURE };
  LOGIN_SUCCESS: { type: typeof LOGIN_SUCCESS };
}

export type IAction = IActions[keyof IActions];

export const updateAuthEmail = (email: string) => ({
  type: UPDATE_AUTH_EMAIL as typeof UPDATE_AUTH_EMAIL,
  payload: { value: email },
});

export const updateAuthPassword = (password: string) => ({
  type: UPDATE_AUTH_PASSWORD as typeof UPDATE_AUTH_PASSWORD,
  payload: { value: password },
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST as typeof LOGIN_REQUEST,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE as typeof LOGIN_FAILURE,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS as typeof LOGIN_SUCCESS,
});

export const login = (email: string, password: string) => (
  dispatch: Dispatch<{}>,
) => {
  const endpoint = 'https://conduit.productionready.io/api/users/login';
  const body = new FormData();
  body.append('json', JSON.stringify({ user: { email, password } }));
  const config = {
    method: 'POST',
    body,
  };
  dispatch(loginRequest());
  fetch(endpoint, config).then(res => res.json()).then(
    res => {
      dispatch(loginSuccess());
    },
    () => {
      dispatch(loginFailure());
    },
  );
};
