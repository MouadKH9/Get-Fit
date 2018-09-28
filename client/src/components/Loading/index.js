import React, { Component } from "react";
import { Icon } from "antd";

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <Icon type="loading" theme="outlined" />
      </div>
    );
  }
}

export default Loading;
