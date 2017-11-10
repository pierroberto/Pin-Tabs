import React, { Component } from 'react';
import './item-view.css';

export default class ItemView extends React.Component {

  render () {
    console.log('props in listview', this.props)
    return (
      <div>{this.props.tab}</div>
    )
  }
}
