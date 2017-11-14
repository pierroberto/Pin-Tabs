import {Store} from 'react-chrome-redux';
import React, { Component } from 'react';
import './settings.css';
import './App'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleButton, expireDate } from '../background/actions';


class Settings extends React.Component {

  // ======================== RENDERING

  render () {
    console.log('props in settings', this.props);
    return (
      <div>
        <div className='header'>
          <h1>Settings</h1>
          <Link to={'/pages/popup.html'} style={{color:'black'}}>
            <i class="fa fa-check fa-2x"></i>
          </Link>
        </div>

        <form>
          <ul>
            <li>
              <label>Keep bookmarks for</label>
                <select onChange={(e)=>this.props.expire(parseInt(e.target.value))}>
                  <option value='86400000'>1 day</option>
                  <option value='172800000'>2 days</option>
                  <option value='259200000'>3 days</option>
                  <option value='345600000'>4 days</option>
                  <option value='432000000'>5 days</option>
                  <option value='518400000'>6 days</option>
                  <option value='604800000'>1 week</option>
                </select>
            </li>
            <li>
              <label>Show icon</label>
                <input type='checkbox' checked={this.props.settings.button} onChange={(e) => this.props.toggle(e.target.checked)}/>
            </li>

          </ul>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bookmark : state.bookmark,
  settings : state.settings
});

const mapDispatchToProps  = (dispatch) => ({
  toggle : (flag) => dispatch(toggleButton(flag)),
  expire : (date) => dispatch(expireDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
