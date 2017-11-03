import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../background/actions';
import './app.css'

class App extends React.Component {

  add () {
    addNum(this.props.counter)
  }

  render () {
    return (
      <p>hello</p>
    )
  }
}

const mapStateToProps = (state) => ({
  counter : state.counter
});

const mapDispatchToProps  = (dispatch) => ({
  addNum: (data) => dispatch(add(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
