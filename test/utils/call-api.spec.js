import test from 'ava';
import callApi, { API_URL } from 'utils/call-api';
import nock from 'nock';

test('method defaults to GET', t => {
  const reply = { foo: 'bar' };
  // we are intercepting https://api.myapp.io/foo
  nock(API_URL)
    .get('/foo')
    .reply(200, reply);
  // AVA will know to wait for the promise if you return it,
  // alternatively you can use async/await
  return callApi('foo').then(({ response, error }) => {
    // if there is an error, this assertion will fail
    // and it will nicely print out the stack trace
    t.ifError(error);
    // we assert that the response body matches
    t.deepEqual(response, reply);
  });
});

test('sends the body', t => {
  const body = { id: 5 };
  const reply = { foo: 'bar' };
  nock(API_URL)
    .post('/foo', body) // if the request is missing this body, nock will throw
    .reply(200, reply);
  return callApi('foo', 'post', body).then(({ response, error }) => {
    t.ifError(error);
    t.deepEqual(response, reply);
  });
});

test('decamelizes the body', t => {
  const reply = { foo: 'bar' };
  nock(API_URL)
    .post('/foo', { snake_case: 'sssss...' }) // what we expect
    .reply(200, reply);
                                // what we send ↓
  return callApi('foo', 'post', { snakeCase: 'sssss...' })
    .then(({ response, error }) => {
      t.ifError(error);
      t.deepEqual(response, reply);
    });
});

test('camelizes the response', t => {
  nock(API_URL)
    .get('/foo')
    .reply(200, { camel_case: 'mmmh...' });
    // they apparently use camel sounds in Doom when demons die,
    // I can see why: https://youtu.be/Nn4vJbHOMPo
  return callApi('foo').then(({ response, error }) => {
    t.ifError(error);
    t.deepEqual(response, { camelCase: 'mmmh...' });
  });
});

// not really necessary because it's implied by previous tests
// test('returns a promise', t => {
// });

test('returns the error', t => {
  const reply = { message: 'Camels are too creepy, sorry!' };
  nock(API_URL)
    .get('/camel_sounds')
    .reply(500, reply);
  return callApi('camel_sounds').then(({ error }) => {
    t.deepEqual(error, reply);
  });
});
