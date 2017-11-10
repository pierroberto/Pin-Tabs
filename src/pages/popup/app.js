import React, { Component } from 'react';
import { connect } from 'react-redux';
import {refreshBookmark, deleteAllBookmark} from '../background/actions';
import './app.css';
import ListView from './ListView.js';

class App extends React.Component {

  constructor (props) {
    super(props)
  }

  saveBookmark () {
    return new Promise ((resolved, rejected) => {
      chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, (data) => {
        console.log('tabs info', data)
        resolved(data[0]);
      })
    })
    .then (link => {
      this.props.refresh(link);
    })
  }


  // loadBookmark () {
  //   // return new Promise ((resolved,rejected) => {
  //     // chrome.storage.sync.get ('url', data => {
  //     //   resolved(data)
  //     // })
  //   // })
  //   // .then ((data) => {
  //     this.props.refresh(data);
  //   // })
  //   // .then ((final) => {
  //   //
  //   // })
  //
  // }


  clearAll () {
  //  chrome.storage.sync.clear(function(obj){
  //     console.log("local storage cleared", obj);
  //   });
    this.props.deleteAll()
  }

  componentDidMount () {
  }



  render () {
    console.log('inside rendering...', this.props.state)
    return (
      <div>
        <h1>Bucket</h1>
        <button onClick={() => this.saveBookmark()}>Add</button>
        <button onClick={() => this.clearAll()}>Clear</button>
        <ListView tabs={this.props.tabs}></ListView>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tabs : state.tabs,
});

const mapDispatchToProps  = (dispatch) => ({

  // I expect data to be an array of strings
  refresh: (data) => dispatch(refreshBookmark(data)),
  deleteAll: () => dispatch(deleteAllBookmark()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
