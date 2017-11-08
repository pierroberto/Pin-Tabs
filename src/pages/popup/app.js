import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../background/actions';
import './app.css'

class App extends React.Component {

  constructor (props) {
    super(props)
  }

  add () {

    this.props.addNum()
  }


  componentDidMount() {
    this.add();
  }

  render () {
    return (
      <div>
        <p>hello</p>
        <h1>Title</h1>
        <button accesskey="h" onClick={() => this.add()}>Add</button>
        <p>counting {this.props.counter}</p>

      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  counter : state.counter
});

const mapDispatchToProps  = (dispatch) => ({
  addNum: async () => dispatch(await add())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
