import callApi from '../utils/call-api';

export const toggleTodo = id => callApi(`todos/${id}/toggle`, 'post');
