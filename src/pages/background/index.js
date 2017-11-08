import axios from 'axios';
import store from './store';


chrome.commands.onCommand.addListener(function(command) {
  alert('hello')
});

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name === "url-connection");
  port.onMessage.addListener(function(msg) {
    if (msg.message === "url") {
      chrome.tabs.getSelected(null,function(tab) {
        port.postMessage({result: tab.url.toString()});
      });
    }
  });
});
