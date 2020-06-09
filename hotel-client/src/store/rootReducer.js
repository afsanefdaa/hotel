import { combineReducers } from 'redux';
import user from './global/reducer';
import hotels from './admin/reducer';

export default combineReducers({
  user,
  hotels,
});
