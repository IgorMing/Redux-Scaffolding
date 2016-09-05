import { LOGIN, LOGOUT, AUTH_ERROR } from './types';

export function login(user, password) {
  return dispatch => {
    if (validateAuth(user, password)) {
      const token = getToken();
      saveStorage(user, token);

      return dispatch({
        type: LOGIN,
        data: {
          authenticated: true,
          token
        }
      });
    }

    return dispatch({
      type: AUTH_ERROR,
      data: {
        authenticated: false,
        error: 'Login e/ou senha inválidos'
      }
    });
  }
}

export function logout() {
  deleteStorage();

  return {
    type: LOGOUT,
    data: {
      authenticated: false
    }
  };
}

function saveStorage(user, token) {
  localStorage.user = user
  localStorage.token = token
}

function deleteStorage() {
  delete localStorage.user
  delete localStorage.token
}

/**
* Mocking token creation. User validation, etc.
*/
function getToken() {
  return Math.random().toString(36).substring(7);
}

function validateAuth(user, password) {
  const validUser = 'igor';
  const validPassword = '1';

  return (user === validUser && password === validPassword);
}
