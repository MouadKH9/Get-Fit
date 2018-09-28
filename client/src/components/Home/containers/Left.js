import React, { Component } from "react";
import MiniProfile from "../components/MiniProfile";
import Settings from "../components/Settings";
import ReactCardFlip from "react-card-flip";
import { connect } from "react-redux";
import * as actions from "../../../actions";

class Left extends Component {
  constructor() {
    super();
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  show() {
    this.props.showSettings(true);
  }
  hide() {
    this.props.showSettings(false);
  }
  render() {
    return (
      <div className="card">
        <ReactCardFlip
          isFlipped={this.props.settings ? this.props.settings.shown : false}
        >
          <MiniProfile key="front" showSet={this.show} />
          <Settings key="back" showSet={this.hide} />
        </ReactCardFlip>
      </div>
    );
  }
}
function mapStateToProps({ settings }) {
  return { settings };
}
export default connect(
  mapStateToProps,
  actions
)(Left);
