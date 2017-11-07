import { combineReducers } from 'redux';

const defaultState = {
  counter: 0
}
// no change reducer for testing
const counter = (state=defaultState,action) => {
  switch (action.type) {
    case 'ADD':

      return 'ok'
  //   console.log('inside reducers..', action, 'state', state)
  //     return ({
  //       counter: action.counter + 1
  //     })
  }
  return state;

}

// Combining both reducers
const reducers = combineReducers({

});

export default counter;
