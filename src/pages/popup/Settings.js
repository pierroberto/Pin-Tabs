import React, { Component } from 'react';
import './settings.css';
import './App'
import {Link} from 'react-router-dom';

export default class Settings extends React.Component {
  render () {
    return (
      <div>
        <div className='header'>
          <h1>Settings</h1>
          <Link to={'/pages/popup.html'} style={{color:'black'}}>
            <i class="fa fa-check fa-2x" ></i>
          </Link>
        </div>
        <div>
          <form>
            <label>Keep bookmarks for</label>
            <select>
              <option value='1-day'>1 day</option>
              <option value='2-days'>2 days</option>
              <option value='3-days'>3 days</option>
              <option value='4-days'>4 days</option>
              <option value='5-days'>5 days</option>
              <option value='6-days'>6 days</option>
              <option value='7-days'>1 week</option>
            </select>
            <label>Show icon</label>
            <input type='checkbox' />
          </form>
        </div>
      </div>
    )
  }
}
