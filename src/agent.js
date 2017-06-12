// @flow

const API_ROOT = 'https://conduit.productionready.io/api';

const request = (method: string, path: string) =>
  fetch(`${API_ROOT}${path}`, { method }).then(response => response.json());

const Articles = {
  all: () => request('GET', '/articles?limit=10'),
};

export default Articles;
