import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './components/App';

const store = configureStore({
  todos: [
    { id: 1, text: 'best', completed: false },
    { id: 2, text: 'todo', completed: false },
    { id: 3, text: 'app', completed: false },
    { id: 4, text: 'ever', completed: false },
  ],
});
const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
