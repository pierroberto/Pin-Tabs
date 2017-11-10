import { combineReducers } from 'redux';

const defaultState = {
  tabs: []
}

const bookmark = (state=defaultState,action) => {
  switch (action.type) {
    case 'REFRESH':
      console.log('url list', action.urlList)
      return {
        ...state,
        tabs: [...state.tabs, action.urlList]
      }
    case 'DELETE-ALL':
      return {
        ...state,
        tabs: []
      }
    case 'DELETE-ONE':
      return {
        ...state,
        tabs: [...state.tabs.filter(element => element[0].url !== action.url)]
      }
  }
  return state;
}

const reducers = combineReducers({

});

export default bookmark;
