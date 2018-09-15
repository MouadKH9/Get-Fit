import React, { Component } from "react";

import Home from "./Home";
import Login from "./Login";
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
      console.info("loading");
      return <span>Loading</span>;
    } else {
      if (!this.props.auth) {
        return <Route exact path="/" component={Login} />;
      } else {
        return (
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/settings" component={Home} />
          </div>
        );
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
