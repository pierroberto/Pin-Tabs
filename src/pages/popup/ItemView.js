import React, { Component } from 'react';
import './item-view.css';

export default class ItemView extends React.Component {

  render () {
    return (
      <div className='content-container'>
        <div className='col-1'>
          <img className='icon' src={this.props.tab_icon} />
          <div className='title'>{this.props.tab_title}</div>
        </div>
        <div className='col-2'>
          <img className='delete-button' src='../assets/delete.png' onClick={()=>this.props.dataCallback(this.props.tab_url)} />
        </div>
      </div>
    )
  }
}
