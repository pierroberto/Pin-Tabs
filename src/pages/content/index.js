import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux'
import { connect } from 'react-redux';

const store = new Store({
  portName: 'COUNTING',
})

export default class InjectApp extends Component {

  render() {
    const classDetail='fa fa-plus-circle fa-3x add-button custom ';
    return (
      <div className ='button-container'>
        <i className={this.props.settings.button ? `${classDetail} visible` : `${classDetail} hidden`} accessKey='s' onClick={() => store.dispatch({type:'ADD-FROM-BUTTON', addFromButton: true})}></i>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  settings : state.settings
});

const ConnectedInjectApp = connect(mapStateToProps)(InjectApp);


window.addEventListener('load', () => {

  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(
    <Provider store={store}>
      <ConnectedInjectApp />
    </Provider>
    , injectDOM);
});
