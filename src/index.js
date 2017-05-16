import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Contacts from './components/Contacts';

import './index.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <App>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/exception" component={Error}/>
        <Route path="/contacts" component={Contacts}/>
      </App>
    </Route>
  </Router>,
  document.getElementById('root')
);
