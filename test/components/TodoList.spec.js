import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from 'components/TodoList';

test('lists todos', t => {
  const todos = [
    { id: 1, text: 'foo', completed: false },
    { id: 2, text: 'bar', completed: false },
    { id: 3, text: 'baz', completed: false },
  ];
  const wrapper = shallow(
    <TodoList todos={todos} toggleTodo={() => {}} />
  );
  t.is(wrapper.find('Todo').length, 3);
});

test('toggles the todo', t => {
  const toggleTodo = sinon.spy();
  const todos = [
    { id: 1, text: 'foo', completed: false },
  ];
  const wrapper = shallow(
    <TodoList todos={todos} toggleTodo={toggleTodo} />
  );
  wrapper.find('Todo').simulate('click');
  t.true(toggleTodo.calledWith(1));
});
