import { combineReducers } from 'redux';

const defaultState = {
  link: ''
}
// no change reducer for testing
const counter = (state=defaultState,action) => {
  switch (action.type) {
    case 'ADD':
    console.log('add reducers', action)

    return 'ok'

  }
  return state;

}

// Combining both reducers
const reducers = combineReducers({

});

export default counter;
