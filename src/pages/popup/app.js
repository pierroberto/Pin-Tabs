import React, { Component } from 'react';
import { connect } from 'react-redux';
import {refreshBookmark, deleteAllBookmark, deleteOneBookmark} from '../background/actions';
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
      if (flag) this.props.refresh(link);
    })
  }

  checkUrl (link) {
    for (let i = 0; i < this.props.tabs.length; i++) {
      if (this.props.tabs[i][0].url === link[0].url) return false;
    }
    return true;
  }

  clearAll () {
    this.props.deleteAll()
  }

  dataCallback = (data) => {
    this.props.deleteOne(data)
    return data;
  }

  render () {

    return (
      <div className='wrapper'>
        <h2>List Tabs saved</h2>
        <button onClick={() => this.saveBookmark()}>Add</button>
        <button onClick={() => this.clearAll()}>Delete All</button>
        <ListView tabs={this.props.tabs} dataCallback={this.dataCallback}></ListView>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tabs : state.tabs,
});

const mapDispatchToProps  = (dispatch) => ({
  refresh: (data) => dispatch(refreshBookmark(data)),
  deleteAll: () => dispatch(deleteAllBookmark()),
  deleteOne: (url) => dispatch(deleteOneBookmark(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
