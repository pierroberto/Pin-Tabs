import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookmark, refreshBookmark } from '../background/actions';
import './app.css';
import randomId from 'uuid/v4';

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      tabs: ['nothing'],
    }
  }

  saveBookmark () {
    return new Promise ((resolved, rejected) => {
      chrome.tabs.query({active: true}, (data) => {
        this.props.add(data[0]);
        resolved(data[0])
      })
    })
    .then (link => {
      chrome.storage.sync.set({'url': ['hello']}, function() {
      });

    })
  }


  loadBookmark () {
    return new Promise ((resolved,rejected) => {
      chrome.storage.sync.get ('url', data => {
        resolved(data)
      })
    })
    .then ((data) => {
      this.props.refresh(data)
    })

  }

  renderBookmark () {
    return this.props.tabs.map (tab => {
      return (
        <h3>{tab}</h3>
      )
    });
  }

  componentDidMount () {
    this.loadBookmark()
  }
  render () {
    console.log('inside rendering...', this.props)
    return (
      <div>
        <h1>Bucket</h1>
        <button onClick={() => this.saveBookmark()}>Add</button>
        <div>{this.renderBookmark()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tabs : state.tabs
});

const mapDispatchToProps  = (dispatch) => ({
  add: (link) => dispatch(addBookmark(link)),
  refresh: (data) => dispatch(refreshBookmark(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
