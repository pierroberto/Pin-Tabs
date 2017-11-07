import axios from 'axios';
import store from './store';

chrome.commands.onCommand.addListener(function(command) {
  alert('hello')
});

chrome.tabs.onActivated.addListener(function(tabs) {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    // chrome.runtime.onMessage.addListener(
    //   function(request, sender, sendResponse) {
    //     if (request.message == "url") {
    //       console.log('url list', tabs)
    //       sendResponse({farewell: tabs[0].url.toString()});
    //     }
    // });
    chrome.runtime.onConnect.addListener(function(port) {
      console.assert(port.name == "url-connection");
      port.onMessage.addListener(function(msg) {
        if (msg.message == "url")
          port.postMessage({result: tabs[0].url.toString()});
      });
    });
    console.log('current URL:',tabs[0].url);
  });
})
