import { combineReducers } from 'redux';

const defaultState = {
  tabs: []
}

const bookmark = (state=defaultState,action) => {
  switch (action.type) {
    case 'REFRESH':
      return {
        ...state,
        tabs: [...state.tabs, action.urlList.url]
      }
    case 'DELETE-ALL':
      return {
        ...state,
        tabs: []
      }
  }
  return state;
}

const reducers = combineReducers({

});

export default bookmark;
