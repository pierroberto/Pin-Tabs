//import axios from 'axios';
import store from './store';
console.log('inside background...', store)

chrome.commands.onCommand.addListener(function(command) {
  alert('hello')
});


store.subscribe (() => {
    console.log('subscribing...');
    store.getState().tabs.map(infoTab => {
      console.log('tabs', infoTab);
      chrome.alarms.create(infoTab.tab[0].url, {when: infoTab.expiry + 60000})
    });
    //store.dispatch({type:'DELETE-ALL'})
});



chrome.alarms.onAlarm.addListener(function (data) {
  console.log('alarm fired');
  let elementExpired = store.getState().tabs.filter(el => {
    return el.tab[0].url === data.name
  })
  store.dispatch({type:'DELETE-ONE', url: elementExpired[0].tab[0].url})
})
