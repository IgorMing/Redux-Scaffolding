import { LOGIN, LOGOUT, AUTH_ERROR } from '../actions/types';

const defaultState = {
  authenticated: !!localStorage.token,
  token: localStorage.token,
  error: null
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case LOGIN: {
      return {
        ...state,
        ...action.data
      }
    } break;
    case LOGOUT: {
      return {
        ...state,
        ...action.data
      }
    } break;
    case AUTH_ERROR: {
      return {
        ...state,
        ...action.data
      }
    } break;
  }

  return state;
}
