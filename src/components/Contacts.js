import React, {Component} from 'react';
import Contact from './Contact';

let contacts = [ {
  "id": 1,
  "name": "Leonard",
  "lastName": "Perez",
  "address": "100 Main St",
  "city": "Stamford",
  "state": "CT",
  "zipCode": '06856',
  "phone": "123456789"
}, {
  "id": 2,
  "name": "Robert",
  "lastName": "Audrey",
  "address": "200 Alburn St",
  "city": "New Heaven",
  "state": "CT",
  "zipCode": '06811',
  "phone": "345678901"
}, {
  "id": 3,
  "name": "Zoe",
  "lastName": "Dechanel",
  "address": "30 Corral St",
  "city": "Stratford",
  "state": "CT",
  "zipCode": '06946',
  "phone": "9087634561"
} ];

class Contacts extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Contacts</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-success btn-sm pull-right">
                <span className="glyphicon glyphicon-plus"></span> Add
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
