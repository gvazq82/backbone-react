import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { createBrowserHistory } from 'history';


// import the root reducer
import rootReducer from './reducers/index';

import contacts from './data/contacts';

// create an object for the default data
const defaultState = {
  contacts
};

const enhacers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhacers);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;