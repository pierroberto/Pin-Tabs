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
  }
  return state;
}

// Combining both reducers
const reducers = combineReducers({

});

export default bookmark;
