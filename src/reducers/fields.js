import { GET_FIELD_TYPES } from '../actions/types';

export default function reducer(state={

  }, action) {

    switch (action.type) {
      case GET_FIELD_TYPES: {
        return {
          ...state,
          ...action.data
        }
      } break;
    }
    return state;
}
