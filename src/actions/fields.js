import fieldTypes from '../data/fieldTypes';
import { GET_FIELD_TYPES } from './types';

export function getFieldTypes() {
  return {
    type: GET_FIELD_TYPES,
    data: fieldTypes
  };
}
