import test from 'ava';
import nock from 'nock';
import { API_URL } from 'utils/call-api';
import * as api from 'services/api';

test('addItem', t => {
  const item = { id: 3, foo: 'bar' };
  const reply = { foo: 'bar' };
  nock(API_URL)
    .post('/items', item)
    .reply(200, reply);
  return api.addItem(item).then(({ response }) => {
    t.deepEqual(response, reply);
  });
});

test('deleteItem', t => {
  const reply = { foo: 'bar' };
  nock(API_URL)
    .delete('/items/3')
    .reply(200, reply);
  return api.deleteItem(3).then(({ response }) => {
    t.deepEqual(response, reply);
  });
});
