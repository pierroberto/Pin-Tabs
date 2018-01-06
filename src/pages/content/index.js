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
      this.classButtonDetail='';
      this.classPopupDetail='';
    }
  render() {
    if (!this.props.settings || !this.props.animation) return null;
    if (this.props.animation.buttonCog) {
      this.classButtonDetail='circle faa-tada ';
      this.classPopupDetail='popup popup-visibility-show ';
      setTimeout(function() {
        store.dispatch({type:'TOGGLE-COG', buttonCog: false});
      }, 3500)
    }
    if (!this.props.animation.buttonCog) {
      this.classButtonDetail='circle ';
      this.classPopupDetail='popup popup-visibility-hide';
    }
    return (
    <div>
        <div
          className={this.props.settings.button ? `${this.classButtonDetail} visible` : `${this.classButtonDetail} hidden`}
          accessKey='s'
          onClick={() => {
              store.dispatch({type:'ADD-FROM-BUTTON', addFromButton: true});
              store.dispatch({type:'TOGGLE-COG', buttonCog: true});
            }
          }
          >
          <div className={this.classPopupDetail}>Saved</div>
          <div className='x-line'></div>
          <div className='y-line'></div>
        </div>
    </div>
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
