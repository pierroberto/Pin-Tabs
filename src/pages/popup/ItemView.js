import React, { Component } from 'react';
import './item-view.css';

export default class ItemView extends React.Component {

  checkDeleteButton() {
    if (this.props.deleteTab) {
      return (
        <div className='col-2'>
          <i
            className="fa fa-trash-o fa-2x"
            onClick={()=>this.props.deleteTab(this.props.tab_url)}>
          </i>
        </div>
      )

    }
  }

  render () {
    return (
      <div className='content-container'>
        <div className='col-1'>
          <img className='icon' src={this.props.tab_icon} />
          <a className='title' href={this.props.tab_url} target='_blank'>{this.props.tab_title}</a>
        </div>
        {this.checkDeleteButton()}
      </div>
    )
  }
}
