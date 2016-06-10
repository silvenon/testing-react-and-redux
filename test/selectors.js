import test from 'ava';
import { getFirstItem } from 'reducers';

test('getFirstItem', t => {
  const list = [
    { id: 1, foo: 'bar' },
    { id: 2, foo: 'bar' },
  ];
  t.deepEqual(getFirstItem({ list }), list[0]);
});
