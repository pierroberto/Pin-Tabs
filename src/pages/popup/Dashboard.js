import React, { Component } from 'react';
import { connect } from 'react-redux';
import {refreshBookmark, deleteAllBookmark, deleteOneBookmark, addBookmark, addFromButton} from '../background/actions';
import './dashboard.css';
import ListView from './ListView.js';
import Settings from './Settings';
import truncate from 'truncate';
import {Link} from 'react-router-dom'


class Dashboard extends React.Component {

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
      if (flag) {
        console.log('inside if');
        this.props.add(link)
      }
      else {
        //If it already exists remove the old link and add a new one
        this.props.deleteOne(link[0].url)
        console.log('save link', link);
        this.props.add(link)
      }
    })
  }

  checkUrl (link) {
    for (let i = 0; i < this.props.bookmark.tabs.length; i++) {
      console.log('first', this.props.bookmark.tabs[i].tab[0].url, 'second', link[0].url);
      if (this.props.bookmark.tabs[i].tab[0].url === link[0].url) return false;
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



// ====================== RENDERING

  render () {
    console.log('rendering in dashboard', this.props);
    // I check if the button in the content script has been clicked
    if (this.props.bookmark.addFromButton) {
      this.saveBookmark()
      this.props.addThroughButton(false)
    }

    return (

      <div>
        <div className='header'>
          <h1>Pin Tabs</h1>
          <Link to={'/pages/settings'} style={{color:'black'}}>
            <i class="fa fa-cog fa-2x"></i>
          </Link>
        </div>

        <div className='nav'>
          <div className='col-1'>
            <button onClick={() => this.saveBookmark()}>Add</button>
            <button onClick={() => this.clearAll()}>Delete All</button>
          </div>
          <div className='col-2'>
          </div>
        </div>
        <ListView
          tabs={this.props.bookmark.tabs}
          deleteTab={this.deleteTab}
          action='renderBookmark'
        />
        <div className={this.props.settings.buttonHistory ? 'visible':'hidden'}>
          <h2 className='history'>History</h2>
          <ListView
            tabs={this.props.bookmark.chronology}
            deleteTab={false}
            action='renderChronology'
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bookmark : state.bookmark,
  settings : state.settings
});

const mapDispatchToProps  = (dispatch) => ({
  add: (url) => dispatch(addBookmark(url)),
  refresh: (data) => dispatch(refreshBookmark(data)),
  deleteAll: () => dispatch(deleteAllBookmark()),
  deleteOne: (url) => dispatch(deleteOneBookmark(url)),
  addThroughButton : (flag) => dispatch(addFromButton(flag))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
