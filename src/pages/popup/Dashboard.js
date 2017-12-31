import React, { Component } from "react";
import { connect } from "react-redux";
import {
  refreshBookmark,
  deleteAllBookmark,
  deleteOneBookmark,
  addBookmark,
  addFromButton
} from "../background/actions";
import "./dashboard.css";
import ListView from "./ListView.js";
import Settings from "./Settings";
import Search from "./Search";
import truncate from "truncate";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  saveBookmark() {
    return new Promise((resolved, rejected) => {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, data => {
        resolved(data);
      });
    }).then(link => {
      if (!link[0].favIconUrl) link[0].favIconUrl = "../assets/nothing.png";
      if (link[0].title.length > 10)
        link[0].title = truncate(link[0].title.toString(), 50);
      const flag = this.checkUrl(link);
      if (flag) {
        this.props.add(link);
      } else {
        //If it already exists remove the old link and add a new one
        this.props.deleteOne(link[0].url);
        this.props.add(link);
      }
    });
  }

  checkUrl(link) {
    for (let i = 0; i < this.props.bookmark.tabs.length; i++) {
      if (this.props.bookmark.tabs[i].tab[0].url === link[0].url) return false;
    }
    return true;
  }

  clearAll() {
    this.props.deleteAll();
  }

  deleteTab = url => {
    this.props.deleteOne(url);
    return data;
  };

  componentDidMount() {
    // VERSION 1.0.2 Double check if the link has expireDate

    this.props.bookmark.tabs.map(tab => {
      console.log("tab", tab.tab[0].url);
      if (tab.expiry >= this.props.settings.expireDate + Date.now()) {
        console.log("inside if");
        store.dispatch({ type: "EXPIRY", url: tab.tab[0].url });
      }
    });
  }

  checkSearch() {
    if (!this.props.bookmark.search) {
      return (
        <ListView
          tabs={this.props.bookmark.tabs}
          deleteTab={this.deleteTab}
          action="renderBookmark"
          expirySettings={this.props.settings.expireDate}
        />
      );
    }
  }

  // ====================== RENDERING

  render() {
    // I check if the button in the content script has been clicked
    if (this.props.bookmark.addFromButton) {
      this.saveBookmark();
      this.props.addThroughButton(false);
    }

    return (
      <div>
        <div className="header">
          <h1>Pin Tabs</h1>
          <Link to={"/pages/settings"} style={{ color: "black" }}>
            <i class="fa fa-cog fa-2x" />
          </Link>
        </div>

        <div className="nav">
          <div className="col-1 custom">
            <button onClick={() => this.saveBookmark()}>Add</button>
            {/* <button onClick={() => this.clearAll()}>Delete All</button> */}
            <Search />
          </div>

          <div className="col-2" />
        </div>

        {this.checkSearch()}

        <div
          className={this.props.settings.buttonHistory ? "visible" : "hidden"}
        >
          <h2 className="history">History</h2>
          <ListView
            tabs={this.props.bookmark.chronology}
            deleteTab={false}
            action="renderChronology"
            expired={true}
          />
        </div>
        <div className="footer">
          <div className="footer__author">Pier Roberto Lucisano 📌 2018</div>
          <div className="footer__social">
            <div className="footer__github">
              <i class="fa fa-github fa-lg" aria-hidden="true" />
              <a
                className="footer__link"
                href="https://github.com/pierroberto/Pin-Tabs"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
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
  add: url => dispatch(addBookmark(url)),
  refresh: data => dispatch(refreshBookmark(data)),
  deleteAll: () => dispatch(deleteAllBookmark()),
  deleteOne: url => dispatch(deleteOneBookmark(url)),
  addThroughButton: flag => dispatch(addFromButton(flag))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
