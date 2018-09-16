import React, { Component } from "react";
import { Button, Icon } from "antd";

import "./login.css";

class Login extends Component {
  componentDidMount() {
    setTimeout(function() {
      document.getElementById("main").classList.remove("is-loading");
    }, 100);
  }
  render() {
    return (
      <div id="main" class="is-loading">
        <h1>Get Fit</h1>
        <br />
        <a href="/api/auth/google">
          <Button className="sign" type="danger" size="large">
            <Icon type="google" theme="outlined" /> Sign in
          </Button>
        </a>
      </div>
    );
  }
}

export default Login;
