import React, { Component } from "react";
import MiniProfile from "../components/MiniProfile";

class Left extends Component {
  render() {
    return (
      <div className="card">
        <MiniProfile showModal={this.props.showModal} username="Mouad" />
      </div>
    );
  }
}

export default Left;
