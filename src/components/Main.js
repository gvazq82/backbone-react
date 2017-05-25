import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Error from './Error';
import Contacts from './Contacts';

import { Route } from 'react-router-dom';

const styles = {marginTop: '75px'};

class Main extends Component {
  render() {
    return (
      <div className="container" style={styles}>
        <div id="main" className="row main">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/exception" component={Error}/>
          <Route path="/contacts" component={() => (<Contacts {...this.props} />)}/>
        </div>
      </div>
    );
  }
}

export default Main;
