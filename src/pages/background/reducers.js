import {combineReducers} from 'redux';
import bookmark from './reducers/bookmarks';
import settings from './reducers/settings';
import animation from './reducers/animations';

export default combineReducers ({
  bookmark : bookmark,
  settings : settings,
  animation: animation,
})
