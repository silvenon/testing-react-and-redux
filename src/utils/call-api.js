import { camelizeKeys, decamelizeKeys } from 'humps';
import fetch from 'isomorphic-fetch';

// you can't call that an app if it doesn't have .io
export const API_URL = 'https://api.myapp.io';

export default function callApi(endpoint, method = 'get', body) {
  return fetch(`${API_URL}/${endpoint}`, { // power of template strings
    headers: { 'content-type': 'application/json' }, // I forget to add this EVERY TIME
    method, // object shorthand
    body: JSON.stringify(decamelizeKeys(body)), // this handles undefined body as well
  })
    // a clever way to bundle together both the response object and the JSON response
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      const camelizedJson = camelizeKeys(json);

      if (!response.ok) {
        return Promise.reject(camelizedJson);
      }

      return camelizedJson;
    })
    // we could also skip this step and use try...catch blocks instead,
    // but that way errors can easily bleed into wrong catch blocks
    .then(
      response => ({ response }),
      error => ({ error })
    );
}
