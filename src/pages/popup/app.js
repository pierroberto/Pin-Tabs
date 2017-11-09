import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Store} from 'react-chrome-redux'
import {refreshBookmark, deleteAllBookmark} from '../background/actions';
import './app.css';
import randomId from 'uuid/v4';

// const store = new Store({
//   portName: 'COUNTING' // communication port name
// });

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
        //this.props.add(data[0]);
        resolved(data[0])
      })
    })
    .then (link => {
      return new Promise ((resolved, rejected) => {
        // chrome.storage.sync.set({'url': [this.props.tabs, link]}, function() {
        //   resolved(link)
        // });
        resolved(link)
      })
      .then (link => {
        this.props.refresh(link)
      })

    })
  }


  loadBookmark () {
    // return new Promise ((resolved,rejected) => {
      // chrome.storage.sync.get ('url', data => {
      //   resolved(data)
      // })
    // })
    // .then ((data) => {
      this.props.refresh(data);
    // })
    // .then ((final) => {
    //
    // })

  }

  renderBookmark () {
    //I render the new list of links
    console.log('called from rendering TABS', this.props.tabs)

    const tabs = this.props.tabs
    return tabs.map (tab => {
      console.log('TAB', tab)
      return (
        <h3 key={randomId()} className='link'>{tab}</h3>
      )
    });
  }

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
        <div id='container'>{this.renderBookmark()}</div>
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
