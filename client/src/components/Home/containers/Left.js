import React, { Component } from "react";
import MiniProfile from "../components/MiniProfile";

class Left extends Component {
  render() {
    return (
      <div className="card">
        <MiniProfile username="Mouad" />
      </div>
    );
  }
}

export default Left;
