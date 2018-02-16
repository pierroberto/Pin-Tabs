import React, { Component } from "react";
import { connect } from "react-redux";
import "./search.css";
import {
  searchBookmark,
  emptySearch,
  toggleSearch
} from "../background/actions";
import ListView from "./ListView";
class Search extends React.Component {
  findTab = () => {
    if (this.props.bookmark.search) {
      return (
        <div>
          <h2>Search results</h2>
          <ListView
            className={this.props.animation.toggleSearch}
            tabs={this.props.bookmark.searchResult}
            action="renderBookmark"
            expirySettings={this.props.settings.expireDate}
          />
        </div>
      );
    }
  };

  componentDidMount() {
    this.props.resetSearch();
  }

  // ================== RENDERING
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.props.searchString(e.target.value)}
          placeholder="search..."
        />
        {this.findTab()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bookmark: state.bookmark,
  settings: state.settings,
  animation: state.animation
});

const mapDispatchToProps = dispatch => ({
  searchString: text => dispatch(searchBookmark(text)),
  resetSearch: () => dispatch(emptySearch()),
  displaySearch: classValue => dispatch(toggleSearch(classValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
