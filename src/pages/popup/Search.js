import React, { Component } from 'react';
import { connect } from 'react-redux';
import './search.css';
import {searchBookmark, emptySearch} from '../background/actions';
import ListView from './ListView';
class Search extends React.Component {


  findTab = (value) => {

    //if the search input is empty then...
    this.props.searchString(value)
    if (!this.props.bookmark.search) {
      const searchListClass='hide';
      //Show Listview component with the tabs
    }
  }

  checkSearch () {
    console.log('show search result', this.props.bookmark.searchResult);
    if (this.props.bookmark.searchResult.length > 0) {
      const searchListClass='show';
      return (
        <ListView className={searchListClass}
          tabs={this.props.bookmark.searchResult}
          //deleteTab={this.deleteTab}
          action='renderBookmark'
          expirySettings={this.props.settings.expireDate}
        />
      )
    }
  }

  componentDidMount() {
    console.log('mounting');
   this.props.resetSearch()
  }

// ================== RENDERING
  render () {
    console.log('props', this.props);

    return (
      <div>
        <input type=  'text' onChange={(e) => this.findTab(e.target.value)} placeholder='search...'></input>
        {this.checkSearch()}
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  bookmark : state.bookmark,
  settings : state.settings,
  animation: state.animation
});

const mapDispatchToProps  = (dispatch) => ({
  searchString: (text) => dispatch(searchBookmark(text)),
  resetSearch: () => dispatch(emptySearch())

});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
