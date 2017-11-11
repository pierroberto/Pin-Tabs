//import axios from 'axios';
import store from './store';
console.log('inside background...', store)

chrome.commands.onCommand.addListener(function(command) {
  alert('hello')
});


store.subscribe (() => {
    store.getState().tabs.map(infoTab => {
      console.log('tabs', infoTab);
      chrome.alarms.create(infoTab.tab[0].url, {when: infoTab.expiry + 7000})
    });
});

chrome.alarms.onAlarm.addListener(function (data) {
  let elementExpired = store.getState().tabs.filter(el => {
    return el.tab[0].url === data.name
  })
  console.log('dispatching expiry...', elementExpired[0].tab[0].url);
  store.dispatch({type:'EXPIRY', url: elementExpired[0].tab[0].url})
})
