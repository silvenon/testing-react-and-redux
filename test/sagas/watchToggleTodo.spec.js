import test from 'ava';
import { take, fork } from 'redux-saga/effects';
import { TOGGLE_TODO } from 'actions';
import * as api from 'services/api';
import { watchToggleTodo } from 'sagas';

test('calls the API function with the payload', t => {
  // first we create the generator, it won't start until we call next()
  const gen = watchToggleTodo();
  // we assert that the yield block indeed has the expected value
  t.deepEqual(
    gen.next().value,
    take(TOGGLE_TODO)
  );
  t.deepEqual(
    // we resolve the previous yield block with the action
    gen.next({ type: TOGGLE_TODO, payload: 3 }).value,
    // then we assert that the API call has been called with the ID
    fork(api.toggleTodo, 3)
  );
  // finally, we assert that the generator keeps looping,
  // which ensures that the it receives TOGGLE_TODO indefinitely
  t.false(gen.next().done);
});
