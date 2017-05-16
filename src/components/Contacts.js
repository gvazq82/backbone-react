import React, {Component} from 'react';

class Contacts extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Contacts</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="pull-right">
                  <button className="btn btn-success">
                    Add&nbsp;<span className="glyphicon glyphicon-plus"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
