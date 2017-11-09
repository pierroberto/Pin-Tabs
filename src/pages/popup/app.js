import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBookmark, refreshBookmark, deleteAllBookmark } from '../background/actions';
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
        console.log('new props tabs', this.props.tabs)
        resolved(data[0])
      })
    })
    .then (link => {
      chrome.storage.sync.set({'url': this.props.tabs}, function() {
      });
      //this.props.refresh(link)
      console.log('tabs updated', this.props.tabs)

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
    //I remove the old div with the old list of links
    const element = document.getElementById("container");
    if (element) element.innterHTML = "";
    //I render the new list of links
    console.log('TABS', this.props.tabs)
    return this.props.tabs.map (tab => {
      return (
        <h3 key={randomId()}>{tab}</h3>
      )
    });
  }

  clearAll () {
   chrome.storage.sync.clear(function(obj){
      console.log("local storage cleared", obj);
    });
    this.props.deleteAll()
  }

  componentDidMount () {
    //this.loadBookmark()
  }
  render () {
    console.log('inside rendering...', this.props)
    return (
      <div>
        <h1>Bucket</h1>
        <button onClick={() => this.saveBookmark()}>Add</button>
        <button onClick={() => this.clearAll()}>Clear</button>
        <div id='container'>{this.renderBookmark()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tabs : state.tabs
});

const mapDispatchToProps  = (dispatch) => ({
  add: (link) => dispatch(addBookmark(link)),
  // I expect data to be an array of strings
  refresh: (data) => dispatch(refreshBookmark(data)),
  deleteAll: () => dispatch(deleteAllBookmark())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
