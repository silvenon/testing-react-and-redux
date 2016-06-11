/* eslint-disable no-constant-condition */
import { take, fork } from 'redux-saga/effects';
import { TOGGLE_TODO } from '../actions';
import * as api from '../services/api';

export function *watchToggleTodo() {
  while (true) { // endless loops are perfectly normal in generators
    const { payload } = yield take(TOGGLE_TODO); // extracting the action's payload
    yield fork(api.toggleTodo, payload); // making a non-blocking API call
  }
}

export default function *rootSaga() {
  yield [
    fork(watchToggleTodo),
  ];
}
