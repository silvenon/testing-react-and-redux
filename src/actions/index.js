export function action(type, payload) {
  return typeof payload === 'undefined' ? { type } : { type, payload };
}

export function createAction(type) {
  return payload => action(type, payload);
}

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = createAction(ADD_ITEM);
export const deleteItem = createAction(DELETE_ITEM);
