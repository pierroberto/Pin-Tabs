import React, { Component } from 'react';
import './list-view.css';
import randomId from 'uuid/v4';
import ItemView from './ItemView';

export default class ListView extends React.Component {

  renderBookmark () {
    return this.props.tabs.map (tab => {
      return (
        <ItemView key={randomId()}
                  tab_url={tab[0].url}
                  tab_title={tab[0].title}
                  tab_icon={tab[0].favIconUrl}
                  dataCallback={this.props.dataCallback}
                  ></ItemView>
      )
    });
  }

  render () {
    return (
      <div>{this.renderBookmark()}</div>
    )
  }
}
