import test from 'ava';
import callApi, { API_URL } from 'utils/call-api';
import nock from 'nock';

test('method defaults to GET', t => {
  const reply = { foo: 'bar' };
  nock(API_URL)
    .get('/foo')
    .reply(200, reply);
  return callApi('foo').then(({ response }) => {
    t.deepEqual(response, reply);
  });
});

test('sends the body', t => {
  const body = { id: 5 };
  const reply = { foo: 'bar' };
  nock(API_URL)
    .post('/foo', body)
    .reply(200, reply);
  return callApi('foo', 'post', body).then(({ response }) => {
    t.deepEqual(response, reply);
  });
});

test('decamelizes the body', t => {
  const reply = { foo: 'bar' };
  nock(API_URL)
    .post('/foo', { snake_case: 'sssss...' })
    .reply(200, reply);
  return callApi('foo', 'post', { snakeCase: 'sssss...' }).then(({ response }) => {
    t.deepEqual(response, reply);
  });
});

test('camelizes the response', t => {
  nock(API_URL)
    .get('/foo')
    .reply(200, { camel_case: 'mmmh...' });
    // https://youtu.be/Nn4vJbHOMPo
  return callApi('foo').then(({ response }) => {
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
