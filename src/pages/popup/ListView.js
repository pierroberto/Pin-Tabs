import React, { Component } from 'react';
import './list-view.css';
import randomId from 'uuid/v4';
import ItemView from './ItemView';

export default class ListView extends React.Component {

  renderTabs () {
    return this.props.tabs.map (tab => {
      return (
        <ItemView key={randomId()}
                  tab_url={tab.tab[0].url}
                  tab_title={tab.tab[0].title}
                  tab_icon={tab.tab[0].favIconUrl}
                  deleteTab={this.props.deleteTab}
                  ></ItemView>
      )
    });
  }
  
  render () {
    console.log('state in list view', this.props)
    return (
      <div>
        {this.renderTabs()}
      </div>
    )
  }
}
