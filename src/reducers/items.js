import { combineReducers } from 'redux';
import { ADD_ITEM, DELETE_ITEM } from '../actions';

const list = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.concat(action.payload);
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  list,
});

export const getFirstItem = state => state.list[0];
