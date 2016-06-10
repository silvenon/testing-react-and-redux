import test from 'ava';
import reducer from 'reducers/todos';
import { TOGGLE_TODO } from 'actions';

test('toggles the todo', t => {
  const prevState = [
    { id: 1, text: 'foo', completed: false },
    { id: 2, text: 'bar', completed: false },
    { id: 3, text: 'baz', completed: false },
  ];
  const action = { type: TOGGLE_TODO, payload: 2 };
  const nextState = reducer(prevState, action);
  t.deepEqual(nextState, [
    { id: 1, text: 'foo', completed: false },
    { id: 2, text: 'bar', completed: true },
    { id: 3, text: 'baz', completed: false },
  ]);
});
