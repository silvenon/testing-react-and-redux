import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import Todo from 'components/Todo';
import { shallow } from 'enzyme';

test('outputs the text', t => {
  const wrapper = shallow(
    // we're passing an empty function just to avoid warnings,
    // because we specified onClick as a required prop
    <Todo text="foo" completed onClick={() => {}} />
  );
  // we assert that the textual part of our component contains todo's text
  t.regex(wrapper.render().text(), /foo/);
});

test('crosses out when completed', t => {
  const wrapper = shallow(
    <Todo text="foo" completed onClick={() => {}} />
  );
  // this is possible because we're using inline styles
  t.is(wrapper.prop('style').textDecoration, 'line-through');
  // with CSS you'd be better of asserting the class name
});

test('calls onClick', t => {
  const onClick = sinon.spy(); // this spy knows everything!
  const wrapper = shallow(
    <Todo text="foo" completed onClick={onClick} />
  );
  // we simulate the click on our component,
  // i.e. the containing <li> element
  wrapper.simulate('click');
  // we assert that the click handler has been called once
  t.true(onClick.calledOnce);
});
