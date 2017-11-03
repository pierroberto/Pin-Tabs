import { combineReducers } from 'redux';

const defaultState = {
  counter: 0
}
// no change reducer for testing
const counter = (state=defaultState,action) => {
  switch (action.type) {
    case 'ADD':
    console.log('inside reducers..', action, 'state', state)
      return ({
        counter: action.counter.counter + 1
      })
  }
  return state;

}

// Combining both reducers
const reducers = combineReducers({
  counter
});

export default reducers;
