import React, { Component } from "react";

import Home from "./Home";
import Login from "./Login";
import Loading from "./Loading";
import { Switch, Route } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../actions";

import "antd/dist/antd.css";
import "../styles.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  getContent() {
    if (this.props.auth === null) {
      return <Loading />;
    } else {
      if (!this.props.auth) {
        return <Route component={Login} />;
      } else {
        return <Route component={Home} />;
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>{this.getContent()}</Switch>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
