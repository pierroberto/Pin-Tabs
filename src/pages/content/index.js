console.log('inside content script...')

import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import truncate from 'truncate';
import {Store} from 'react-chrome-redux';



import { connect } from 'react-redux';




const store = new Store({
  portName: 'COUNTING',
})

class InjectApp extends Component {
  constructor(props) {
    super(props);

  }


  render() {

    console.log('rendering icon', store.getState().settings);
    const classDetail='fa fa-plus-circle fa-3x add-button custom ';
    return (
      <div className ='button-container'>
        <i className={this.props.settings.button ? `${classDetail} visible` : `${classDetail} hidden`} accessKey='s' onClick={() => store.dispatch({type:'ADD-FROM-BUTTON', addFromButton: true})}></i>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookmark : state.bookmark,
  settings : state.settings
});


window.addEventListener('load', () => {

  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
});

export default connect(mapStateToProps, mapDispatchToProps)(InjectApp);
