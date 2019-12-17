import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import uersReducer from './usersReducers';

export default combineReducers({
  posts: postsReducer,
  users: uersReducer
});