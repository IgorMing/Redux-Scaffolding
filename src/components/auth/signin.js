import React, { Component } from 'react';

import SigninForm from './signin_form';

export default class Signin extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SigninForm location={window.location} />
        </div>
      </div>
    );
  }
}
