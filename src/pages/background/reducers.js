import { combineReducers } from 'redux';

const defaultState = {
  tabs: []
}

const bookmark = (state=defaultState,action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        tabs: [...state.tabs, action.link.url]
      }
    case 'REFRESH':
      return {
        ...state,
        tabs: [...state.tabs, ...action.urlList.url]
      }

  }
  return state;
}


const reducers = combineReducers({

});

export default bookmark;
