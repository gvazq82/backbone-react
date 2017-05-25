import React, {Component} from 'react';
import Contact from './Contact';
class Contacts extends Component {
  render() {
    const {contacts} = this.props;

    return (
      <div>
        <div className="page-header">
          <h1>Contacts</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-success btn-sm pull-right">
                <span className="glyphicon glyphicon-plus"/> Add
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {contacts.map((contact, index) => (
                <Contact {...contact} key={contact.id}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
