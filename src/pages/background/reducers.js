import {combineReducers} from 'redux';
import bookmark from './reducers/bookmarks';
import settings from './reducers/settings';

export default combineReducers ({
  bookmark : bookmark,
  settings : settings
})
