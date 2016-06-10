/* eslint-disable no-constant-condition */
import { take, fork } from 'redux-saga/effects';
import { DELETE_ITEM } from '../actions';
import * as api from '../services/api';

export function *watchDeleteItem() {
  while (true) {
    const { payload } = yield take(DELETE_ITEM);
    yield fork(api.deleteItem, payload);
  }
}

export default function *rootSaga() {
  yield [
    fork(watchDeleteItem),
  ];
}
