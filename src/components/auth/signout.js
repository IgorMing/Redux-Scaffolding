import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

class Signout extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentDidMount() {
    this.props.logout();
  }

  render() {
    return(
      <div>
        <h1>Logged Out!</h1>
      </div>
    );
  }
}

export default connect(null, actions)(Signout);
