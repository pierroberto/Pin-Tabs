import React, { Component } from 'react';
import { connect } from 'react-redux';
import {refreshBookmark, deleteAllBookmark, deleteOneBookmark, addBookmark, addFromButton} from '../background/actions';
import './app.css';
import ListView from './ListView.js';
import truncate from 'truncate';
class App extends React.Component {

  constructor (props) {
    super(props)
  }

  saveBookmark () {
    return new Promise ((resolved, rejected) => {
      chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, (data) => {
        resolved(data);
      })
    })
    .then (link => {
      if (!link[0].favIconUrl) link[0].favIconUrl='../assets/nothing.png';
      if (link[0].title.length > 10) link[0].title = truncate(link[0].title.toString(), 55)
      const flag = this.checkUrl(link);
      if (flag) this.props.add(link);
    })
  }

  checkUrl (link) {
    for (let i = 0; i < this.props.tabs.length; i++) {
      if (this.props.tabs[i].tab[0].url === link[0].url) return false;
    }
    return true;
  }

  clearAll () {
    this.props.deleteAll()
  }

  deleteTab = (url) => {
    this.props.deleteOne(url)
    return data;
  }

  render () {
    console.log('state', this.props);
    // I check if the button in the content script has been clicked
    if (this.props.addFromButton) {
      console.log('inside if render', this.props.addFromButton)
      this.saveBookmark()
      this.props.addThroughButton(false)
    }

    return (
      <div className='wrapper'>
        <div className='nav'>
          <div className='col-1'>
            <button onClick={() => this.saveBookmark()}>Add</button>
            <button onClick={() => this.clearAll()}>Delete All</button>
          </div>
          <div className='col-2'>
            <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
          </div>
        </div>
        <ListView tabs={this.props.tabs} deleteTab={this.deleteTab} action='renderBookmark'></ListView>
        <h2 className='history'>History</h2>
        <ListView chronology={this.props.chronology} action='renderChronology'></ListView>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tabs : state.tabs,
  chronology: state.chronology,
  addFromButton: state.addFromButton
});

const mapDispatchToProps  = (dispatch) => ({
  add: (url) => dispatch(addBookmark(url)),
  refresh: (data) => dispatch(refreshBookmark(data)),
  deleteAll: () => dispatch(deleteAllBookmark()),
  deleteOne: (url) => dispatch(deleteOneBookmark(url)),
  addThroughButton : (flag) => dispatch(addFromButton(flag))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
