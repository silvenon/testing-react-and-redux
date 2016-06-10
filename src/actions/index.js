export function action(type, payload) {
  if (typeof payload === 'undefined') {
    return { type };
  }
  return { type, payload };
}

function createAction(type) {
  return payload => action(type, payload);
}

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = createAction(TOGGLE_TODO);
