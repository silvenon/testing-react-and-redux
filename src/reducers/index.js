import { combineReducers } from 'redux';
import items, * as fromItems from './items';

export default combineReducers({
  items,
});

export const getFirstItem = state => fromItems.getFirstItem(state.items);
