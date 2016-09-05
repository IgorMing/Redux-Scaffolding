import React, { Component } from 'react';
import { connect } from 'react-redux';

class Index extends Component {
  render() {
    return(
      <div>
        <h1>Home (Insecure page)</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Index);
