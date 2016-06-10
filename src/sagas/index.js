/* eslint-disable no-constant-condition */
import { take, fork } from 'redux-saga/effects';
import { TOGGLE_TODO } from '../actions';
import * as api from '../services/api';

export function *watchToggleTodo() {
  while (true) {
    const { payload } = yield take(TOGGLE_TODO);
    yield fork(api.toggleTodo, payload);
  }
}

export default function *rootSaga() {
  yield [
    fork(watchToggleTodo),
  ];
}
