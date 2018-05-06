import React, { Component } from "react";
import { connect } from "react-redux";
import "./app.css";
import ListView from "./ListView.js";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Switch>
            <Route exact path="/pages/popup.html" component={Dashboard} />
            <Route path="/pages/settings" component={Settings} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
