console.log('inside content script...')
//document.body.innerHTML += "<img id='add' src='http://www.downloadclipart.net/medium/18122-blue-pin-clip-art.png'style='width: 50px; position:fixed; top:5px; left:5px; z-index:999999'/>";

import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

class InjectApp extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className='add-button'></div>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react-example';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
});
