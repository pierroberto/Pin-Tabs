import React, { Component } from 'react';
import './list-view.css';
import randomId from 'uuid/v4';

export default class ListView extends React.Component {

  renderBookmark () {

    const tabs = this.props.tabs
    return tabs.map (tab => {
      console.log('TAB', tab)
      return (
        <a href={tab} target='_blank' key={randomId()} className='link'>{tab}</a>
      )
    });
  }


  render () {
    console.log('props in listview', this.props)
    return (
      <div>{this.renderBookmark()}</div>
    )
  }
}
