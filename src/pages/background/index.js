import axios from 'axios';
import store from './store';



chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab

    // var div=document.createElement("div");
    // document.body.appendChild(div);
    // div.innerText="test123";
    // let x = chrome.tabs.executeScript({
    //
    // });
});

chrome.commands.onCommand.addListener(function(command) {

  alert('hello')
});

chrome.tabs.onActivated.addListener(function(tabs) {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
  });
})
