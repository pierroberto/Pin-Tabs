import React, { Component } from "react";
import "./item-view.css";

export default class ItemView extends React.Component {
  checkDeleteButton() {
    if (this.props.deleteTab) {
      return (
        <div className="col-2">
          <i
            className="fa fa-trash-o fa-2x"
            onClick={() => this.props.deleteTab(this.props.tab_url)}
          />
        </div>
      );
    }
  }

  checkExpireDate() {
    let timeLeft;
    const time = new Date(
      this.props.expirySettings - (Date.now() - this.props.expiry)
    );
    const seconds = (time / 1000).toFixed(1);
    if (this.props.expired || seconds <= 0)
      return <div className="col-1-2 warning">Expired</div>;
    const minutes = (time / (1000 * 60)).toFixed(1);
    const hours = (time / (1000 * 60 * 60)).toFixed(1);
    const days = (time / (1000 * 60 * 60 * 24)).toFixed(1);

    if (seconds < 60) {
      Math.floor(seconds) === 1
        ? (timeLeft = Math.floor(seconds) + " second")
        : (timeLeft = Math.floor(seconds) + " seconds");
    } else if (minutes < 60) {
      Math.floor(minutes) === 1
        ? (timeLeft = Math.floor(minutes) + " minute")
        : (timeLeft = Math.floor(minutes) + " minutes");
    } else if (hours < 24) {
      Math.floor(hours) === 1
        ? (timeLeft = Math.floor(hours) + " hour")
        : (timeLeft = Math.floor(hours) + " hours");
    } else {
      Math.floor(days) === 1
        ? (timeLeft = Math.floor(days) + " day")
        : (timeLeft = Math.floor(days) + " days");
    }
    return <div className="col-1-2 warning">Expires in {timeLeft}</div>;
  }

  render() {
    return (
      <div className="content-container">
        <div className="col-1">
          <div className="row">
            <div className="col-1-1">
              <img className="icon" src={this.props.tab_icon} />
            </div>
            <div className="col-1-2">
              <a className="title" href={this.props.tab_url} target="_blank">
                {this.props.tab_title}
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-1-1" />
            {this.checkExpireDate()}
          </div>
        </div>
        {this.checkDeleteButton()}
      </div>
    );
  }
}
