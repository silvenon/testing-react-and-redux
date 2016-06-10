import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleTodo } from '../actions';
import { getTodos } from '../reducers';

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => props.toggleTodo(todo.id)}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: getTodos(state),
});

const mapDispatchToProps = {
  toggleTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
