import { combineReducers } from 'redux';
import auth from './auth';
import fields from './fields';

const rootReducer = combineReducers({
  auth,
  fields
});

export default rootReducer;
