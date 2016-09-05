import React, { Component } from 'react';

import Header from './layout/header';
import Home from './home/home';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children || <Home />}
        </div>
      </div>
    );
  }
}
