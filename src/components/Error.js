import React, {Component} from 'react';

class Error extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <div className="text-danger"><h3>Ops!! Unexpected Error</h3>
          </div>
          <div>
            <span>There was an unexpected exception.</span></div>
        </div>
      </div>
    );
  }
}

export default Error;
