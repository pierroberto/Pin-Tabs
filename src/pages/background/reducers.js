import { combineReducers } from 'redux';

const defaultState = {
  tabs: [{tab: [{url:'', title: '', favIconUrl: ''}], expiry: 0}],
  chronology: [{tab: [{url:'', title: '', favIconUrl: ''}], expiry: 0}]
}

const bookmark = (state=defaultState,action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        tabs: [...state.tabs, {tab: action.urlList, expiry: action.expiry}]
      }
    case 'REFRESH':
      return {
        ...state,
        tabs: [...state.tabs, {tab: action.urlList, expiry: action.expiry}]
      }
    case 'DELETE-ALL':
      console.log('deleting all');
      return {
        ...state,
        tabs: [],
      }
    case 'DELETE-ONE':
      return {
        ...state,
        tabs: [...state.tabs.filter(element => element.tab[0].url !== action.url)]
      }
    case 'EXPIRY':
      console.log('expiry', state.chronology);
      return {
        ...state,
        tabs: [...state.tabs.filter(element => element.tab[0].url !== action.url)],
        chronology: [...state.tabs.filter(element => element.tab[0].url === action.url), ...state.chronology.splice(0,5)]
      }
  }
  return state;
}

const reducers = combineReducers({

});

export default bookmark;
