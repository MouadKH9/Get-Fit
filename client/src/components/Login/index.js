import React, { Component } from "react";
import { Button, Icon } from "antd";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="container">
          <h1>GET FIT</h1>
          <a href="/api/auth/google">
            <Button type="danger" size="large">
              <Icon type="google" theme="outlined" /> Sign in
            </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
