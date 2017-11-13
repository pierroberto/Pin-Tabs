import React, { Component } from 'react';
import './list-view.css';
import randomId from 'uuid/v4';
import ItemView from './ItemView';

export default class ListView extends React.Component {

  renderTabs () {
    console.log('inside list view', this.props);
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
    return (
      <div>
        {this.renderTabs()}
      </div>
    )
  }
}
