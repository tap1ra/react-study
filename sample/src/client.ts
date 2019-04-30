import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Routes from './router/routes';

const store = configureStore();

ReactDOM.hydrate(
  <Provider store={store}>
    <CategoryContents />
  </Provider>,
  document.getElementById('contents')
);