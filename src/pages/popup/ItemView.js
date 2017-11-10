import React, { Component } from 'react';
import './item-view.css';

export default class ItemView extends React.Component {

  render () {

    return (
      <div className='content-container'>
        <img src={this.props.tab_icon} />
        <div>{this.props.tab_title}</div>
      </div>
    )
  }
}
