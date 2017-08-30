import { combineReducers } from 'redux';
import ProfilesReducer from './ProfilesReducer';

export default combineReducers({
  profiles: ProfilesReducer,

});
