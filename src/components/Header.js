import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <ul className="nav navbar-nav pull-right">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#exception">Exception</a></li>
          </ul>
          <div className="navbar-header">
            <h3 className="text-muted">CommonJS-Basic</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
