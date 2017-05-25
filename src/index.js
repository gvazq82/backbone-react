import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import store, {history} from './store';

import './index.css';

import {
  BrowserRouter as Router
} from 'react-router-dom'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
