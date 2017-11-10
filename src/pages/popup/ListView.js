import React, { Component } from 'react';
import './list-view.css';
import randomId from 'uuid/v4';
import ItemView from './ItemView';

export default class ListView extends React.Component {

  getUrl (e) {
    console.log('here there should be the link', this.props, 'e', e)
  }

  renderBookmark () {
    console.log('state in listview', this.props)
    //const tabs = this.props.tabs
    return this.props.tabs.map (tab => {
      return (
        <ItemView key={randomId()}
                  tab_url={tab[0].url}
                  tab_title={tab[0].title}
                  tab_icon={tab[0].favIconUrl}
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
