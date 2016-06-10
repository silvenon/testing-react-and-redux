import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { history as _history } from './services';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './styles/global/base.scss';
import './fonts/averta/stylesheet.css';

const store = configureStore();
const history = syncHistoryWithStore(_history, store);
const rootEl = document.getElementById('root');

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>,
  rootEl
);
