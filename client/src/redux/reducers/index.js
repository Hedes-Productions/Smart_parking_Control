import { combineReducers } from 'redux';
import offlineUsersReducer from './offlineUsers.js';

export default combineReducers({
  offlineUsers: offlineUsersReducer,
});
