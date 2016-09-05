import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if(!this.props.auth.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps, nextState) {
      console.log('really?', this.props.auth.authenticated);
      if(!this.props.auth.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props}/>
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

  return connect(mapStateToProps)(Authentication);
}
