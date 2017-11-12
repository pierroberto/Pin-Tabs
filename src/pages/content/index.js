console.log('inside content script...')

import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import truncate from 'truncate';
import {Store} from 'react-chrome-redux';

const store = new Store({
  portName: 'COUNTING',
})

class InjectApp extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className ='button-container'>
        {/* <div className='add-button' accessKey='s' onClick={() => store.dispatch({type:'ADD-FROM-BUTTON', addFromButton: true})}></div> */}
        <i className="fa fa-plus-circle fa-5x add-button custom" accessKey='s' onClick={() => store.dispatch({type:'ADD-FROM-BUTTON', addFromButton: true})}></i>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
});
