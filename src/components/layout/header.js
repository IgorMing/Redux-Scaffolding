import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import AppLink from './appLink';

class Header extends Component {
  authButton(authenticated) {

    if (!authenticated) {
      return (
        <AppLink
          authLink={false}
          to="/signin">Sign In
        </AppLink>
      );
    }

    return (
      <AppLink
        authLink={false}
        to="/signout">Sign Out
      </AppLink>
    );
  }

  render() {
    const { authenticated } = this.props.auth;

    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <AppLink
              to="/"
              authLink={false}
              className="navbar-brand">Aplicação teste</AppLink>
          </div>

          <div>
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <AppLink
                  to="/fields"
                  authLink={false}>Campos</AppLink>
              </li>

              <li className="nav-item">
                <AppLink
                  to="/protected"
                  loggedIn={authenticated}
                  authLink={true}>Protected</AppLink>
              </li>
            </ul>
          </div>

          <div className="pull-right">
            <ul className="nav navbar-nav navbar-right">
              <li>
                {this.authButton(authenticated)}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(Header);
