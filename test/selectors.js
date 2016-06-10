import test from 'ava';
import { getTodos } from 'reducers';

test('getTodos', t => {
  const todos = [
    { id: 1, text: 'foo', completed: true },
    { id: 2, text: 'bar', completed: false },
    { id: 3, text: 'baz', completed: true },
  ];
  t.deepEqual(getTodos({ todos }), todos);
});
