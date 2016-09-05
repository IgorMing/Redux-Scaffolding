import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

export default class AppLink extends React.Component {
  render() {
    const {to, authLink, loggedIn, className, children } = this.props;

    if (authLink && !loggedIn) {
      return(
        <span></span>
      );
    }
    return(
        <Link
          to={to}
          className={className}>{children}</Link>
    );
  }
}

AppLink.propTypes = {
  children: React.PropTypes.string.isRequired,
  to: React.PropTypes.string.isRequired,
  authLink: React.PropTypes.bool.isRequired
}

AppLink.defaultProps = {
  loggedIn: false
}
