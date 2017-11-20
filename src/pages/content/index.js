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
    constructor (props) {
      super(props)
      this.classDetail=''
    }
  render() {
    //VERSION 1.0.2
    console.log('store in content script', this.props);
    if (!this.props.settings || !this.props.animation) return null;
    if (this.props.animation.buttonCog) {
      console.log('add class');
      this.classDetail='fa fa-plus-circle faa-tada animated fa-3x add-button custom ';
      setTimeout(function() {
        store.dispatch({type:'TOGGLE-COG', buttonCog: false});
      }, 1500)
    }
    if (!this.props.animation.buttonCog) {
      this.classDetail='fa fa-plus-circle fa-3x add-button custom ';
    }
    return (

        <i
          className={this.props.settings.button ? `${this.classDetail} visible` : `${this.classDetail} hidden`}
          accessKey='s'
          onClick={() => {
              store.dispatch({type:'ADD-FROM-BUTTON', addFromButton: true});
              store.dispatch({type:'TOGGLE-COG', buttonCog: true});

            }
          }>
        </i>

    );


  }
}

const mapStateToProps = (state) => ({
  settings : state.settings,
  animation: state.animation
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
