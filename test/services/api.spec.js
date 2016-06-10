import test from 'ava';
import nock from 'nock';
import { API_URL } from 'utils/call-api';
import * as api from 'services/api';

test('toggleTodo', t => {
  const reply = { foo: 'bar' };
  nock(API_URL)
    .post('/todos/3/toggle')
    .reply(200, reply);
  return api.toggleTodo(3).then(({ response, error }) => {
    t.ifError(error);
    t.deepEqual(response, reply);
  });
});
