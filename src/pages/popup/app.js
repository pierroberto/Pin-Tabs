import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookmark } from '../background/actions';
import './app.css'

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      tabs: ['nothing']
    }
  }
  addBookmark () {
    console.log('this props', this.props)
    chrome.tabs.query({active: true}, (data) => {
      this.props.add(data[0])
    });
  }

  renderList () {
    return this.props.tabs.map (link => {
      return (
        <h3 class='link'>{link}</h3>
      )
    });
  }

  render () {
    console.log('props, render', this.props)
    return (
      <div>
        <h1>Bucket</h1>
        <button onClick={() => this.addBookmark()}>Add</button>
        <div>{this.renderList()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tabs : state.tabs
});

const mapDispatchToProps  = (dispatch) => ({
  add: (link) => dispatch(bookmark(link))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
