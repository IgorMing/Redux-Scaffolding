import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

class SigninForm extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      error: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()

    const user = this.refs.input_login.value
    const password = this.refs.input_password.value

    this.props.login(user, password);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.auth.authenticated) {
      this.context.router.push('/')
    } else {
      console.error('Erro de autenticação');
      // TODO: show error message
    }
  }

  render() {

    return(
      <form className="input-group" onSubmit={this.handleSubmit}>

        <h1>Login</h1>

        <input
          className="form-control"
          ref="input_login"
          placeholder="Usuário" />

        <input
          type="password"
          className="form-control"
          ref="input_password"
          placeholder="Senha" />

        <div className="form-group">
          <button
            className="btn btn-primary btn-lg">Acessar</button>
        </div>

      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, actions)(SigninForm);
