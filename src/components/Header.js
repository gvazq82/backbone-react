import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
        <div className='container-fluid'>
          <ul className='nav navbar-nav pull-right'>
            <li className='active'><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>
            <li><Link to='/exception'>Exception</Link></li>
          </ul>
          <div className='navbar-header'>
            <h3 className='text-muted'>CommonJS-Basic</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
