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
      this.addEmptyPic(link)
      this.truncateTitle(link)
      this.props.refresh(link);
    })
  }

  addEmptyPic(pic) {
    if (!pic[0].favIconUrl)
      pic[0].favIconUrl='../assets/nothing.png';
  }

  truncateTitle(title) {
    if (title[0].title.length > 10)
      title[0].title = truncate(title[0].title.toString(), 55)
  }

  clearAll () {
    this.props.deleteAll()
  }

  dataCallback = (data) => {
    console.log('data passed from props ',data);
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
