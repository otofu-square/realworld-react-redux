const ROOT_ENDPOINT = 'https://conduit.productionready.io/api';

type Method = 'GET' | 'POST';

const config = (method: Method) => ({
  method: method,
  headers: { 'Content-Type': 'application/json' },
});

const request = {
  get: (path: string) =>
    fetch(`${ROOT_ENDPOINT}/${path}`, { ...config('GET') }),
  post: (path: string, body: object) =>
    fetch(`${ROOT_ENDPOINT}/${path}`, {
      ...config('POST'),
      body: JSON.stringify(body),
    }),
};

export const Auth = {
  current: () => request.get('/user'),
  login: (email: string, password: string) =>
    request.post('/users/login', { user: { email, password } }),
  register: (username: string, email: string, password: string) =>
    request.post('/users', { user: { username, email, password } }),
};
