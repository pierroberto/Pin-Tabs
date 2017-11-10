import axios from 'axios';
import store from './store';
console.log('inside background...')

chrome.commands.onCommand.addListener(function(command) {
  alert('hello')
});
