import axios from 'axios';
import store from './store';


chrome.commands.onCommand.addListener(function(command) {
  alert('hello')
});
