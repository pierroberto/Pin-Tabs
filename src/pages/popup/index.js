// var _gaq = _gaq || [];
// _gaq.push(['_setAccount', 'UA-59786840-7']);
// _gaq.push(['_trackPageview']);
//
// (function() {
//   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//   ga.src = 'https://ssl.google-analytics.com/ga.js';
//   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
// })();


import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Store} from 'react-chrome-redux'
import App from './App';
import Settings from './Settings'
import reducers from '../background/reducers';

const store = new Store({
  portName: 'COUNTING',
})

store.ready().then(() => {

  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    mountNode
  )
})
