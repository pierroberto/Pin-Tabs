import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookmark } from '../background/actions';
import './app.css'
import randomId from 'uuid/v4';

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      tabs: ['nothing'],
      storage: null,
      flag:false
    }
  }
  addBookmark () {
    console.log('this props', this.props)
    chrome.tabs.query({active: true}, (data) => {
      console.log('into query', data[0].url)
      this.props.add(data[0])
    });
  }

  renderBookmark() {
    return this.props.tabs.map(link => {
      return (
        <h4>{link}</h4>
      )
    })
  }


  loadList () {
    chrome.storage.sync.get('url', (data) => {
      console.log('data', data.url)
      this.setState({tabs:this.state.tabs, storage:data, flag:true})
    });
  }

  renderList(arr) {
    return arr.map (link => {
      return (
        <h3 key={randomId()} className='link'>{link}</h3>
      )
    })
  }

  render () {
    if (!this.state.flag) this.loadList();
    console.log('props, render', this.props)
    if (this.state.storage) return (
      <div>
        <h1>Bucket</h1>
        <button onClick={() => this.addBookmark()}>Add</button>
        <div>{this.renderBookmark()}</div>
        <div>{this.renderList(this.state.storage.url)}</div>
      </div>
    )
    return (
      <div>
        <h1>Bucket</h1>
        <button onClick={() => this.addBookmark()}>Add</button>
        <div>Loading...</div>
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
