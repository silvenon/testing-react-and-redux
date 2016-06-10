import test from 'ava';
import { take, fork } from 'redux-saga/effects';
import { DELETE_ITEM } from 'actions';
import * as api from 'services/api';
import { watchDeleteItem } from 'sagas';

test('calls the API function with the payload', t => {
  // first we create the generator, nothing inside it has been executed yet
  const gen = watchDeleteItem();
  // this way we can assert that the yield block indeed has the expected value
  t.deepEqual(
    gen.next().value,
    take(DELETE_ITEM)
  );
  // now we assert that the API call has been called with action's payload
  t.deepEqual(
    // we resolve the previous yield block with an action containing the payload,
    // I omitted the action type because we are not using it in our saga
    gen.next({ payload: 3 }).value,
    fork(api.deleteItem, 3)
  );
  // we assert that the generators keeps looping, which ensures that
  // the generator receives the DELETE_ITEM action indefinitely
  t.false(gen.next().done);
});
