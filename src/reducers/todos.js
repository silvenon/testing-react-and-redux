import { TOGGLE_TODO } from '../actions';

const todo = (state, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      if (state.id !== action.payload) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
