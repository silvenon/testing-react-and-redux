import test from 'ava';
import reducer from 'reducers/todos';
import { toggleTodo } from 'actions';

test('toggles the todo', t => {
  const prevState = [
    { id: 1, text: 'foo', completed: false },
    { id: 2, text: 'bar', completed: false },
    { id: 3, text: 'baz', completed: false },
  ];
  const nextState = reducer(prevState, toggleTodo(2));
  t.deepEqual(nextState, [
    { id: 1, text: 'foo', completed: false },
    { id: 2, text: 'bar', completed: true },
    { id: 3, text: 'baz', completed: false },
  ]);
});
