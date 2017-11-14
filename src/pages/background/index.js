import store from './store';
console.log('inside background...', store)

store.subscribe (() => {

    store.getState().bookmark.tabs.map(infoTab => {
      chrome.alarms.create(infoTab.tab[0].url, {when: infoTab.expiry + store.getState().settings.expireDate})
    });
});

chrome.alarms.onAlarm.addListener(function (data) {
  let elementExpired = store.getState().bookmark.tabs.filter(el => {
    return el.tab[0].url === data.name
  })
  store.dispatch({type:'EXPIRY', url: elementExpired[0].tab[0].url})
})
