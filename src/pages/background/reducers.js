import { combineReducers } from 'redux';

const defaultState = {
  tabs: []
}

const bookmark = (state=defaultState,action) => {
  switch (action.type) {
    case 'ADD':
      let newState = {}
      console.log('add reducers', action, 'old state', state)
      newState.tabs = state.tabs
      newState.tabs.push(action.link.url)
      console.log('newstate', newState)
      return newState
  }
  return state;
}

// Combining both reducers
const reducers = combineReducers({

});

export default bookmark;
