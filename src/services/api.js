import callApi from '../utils/call-api';

export const addItem = item => callApi('items', 'post', item);
export const deleteItem = id => callApi(`items/${id}`, 'delete');
