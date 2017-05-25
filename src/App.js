import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actioCreators from './actions/actionCreator';

import Header from './components/Header';
import Main from './components/Main';

function mapStateToProps(state) {
  return {
    'contacts': state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actioCreators, dispatch)
}

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main {...this.props}/>
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
