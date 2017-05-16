import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          {this.props.lastName}, {this.props.name}
        </div>
        <div className="panel-body">
          Address: {this.props.address}<br/>
          City: {this.props.city}<br/>
          State: {this.props.state}<br/>
        </div>
      </div>
    );
  }
}

export default Contact;
