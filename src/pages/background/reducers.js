import { combineReducers } from 'redux';

const defaultState = {
  counter: 0
}
// no change reducer for testing
const events = (state=defaultState,action) => {
  switch (action.type) {
    case 'ADD':
      return ({
        counter: action.counter + 1
      })
  }
  return state;

}

// Combining both reducers
const reducers = combineReducers({
  events
});

export default reducers;
