import React, { Component } from 'react';
import { connect } from 'react-redux';
import './search.css';
import {searchBookmark, emptySearch, toggleSearch} from '../background/actions';
import ListView from './ListView';
class Search extends React.Component {


  findTab = () => {
    if (this.props.bookmark.search) {
      return (
        <ListView className={this.props.animation.toggleSearch}
          tabs={this.props.bookmark.searchResult}
          action='renderBookmark'
          expirySettings={this.props.settings.expireDate}
        />
      )
    }
  }

  componentDidMount() {
    this.props.resetSearch()
  }

// ================== RENDERING
  render () {
    return (
      <div>
        <input type='text' onChange={(e) => this.props.searchString(e.target.value)} placeholder='search...' ></input>
        {this.findTab()}
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
  resetSearch: () => dispatch(emptySearch()),
  displaySearch: (classValue) => dispatch(toggleSearch(classValue))

});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
