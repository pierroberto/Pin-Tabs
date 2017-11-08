import { applyMiddleware, createStore } from 'redux'
import { wrapStore, alias } from 'react-chrome-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
//import aliases from './aliases'
import reducer from './reducers'



console.log('inside the store')

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

wrapStore(store, {
  portName: 'COUNTING',
})

export default store;
