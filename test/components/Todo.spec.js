import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import Todo from 'components/Todo';
import { shallow } from 'enzyme';

test('outputs the text', t => {
  const wrapper = shallow(
    <Todo text="foo" completed onClick={() => {}} />
  );
  t.regex(wrapper.render().text(), /foo/);
});

test('crosses out when completed', t => {
  const wrapper = shallow(
    <Todo text="foo" completed onClick={() => {}} />
  );
  t.is(wrapper.prop('style').textDecoration, 'line-through');
});

test('calls onClick', t => {
  const onClick = sinon.spy();
  const wrapper = shallow(
    <Todo text="foo" completed onClick={onClick} />
  );
  wrapper.simulate('click');
  t.true(onClick.calledOnce);
});
