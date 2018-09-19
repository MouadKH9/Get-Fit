import React, { Component } from "react";
import { Avatar, Row, Icon } from "antd";
import Info from "./Info";
import LogForm from "./LogForm";
import { connect } from "react-redux";
import * as actions from "../../../actions";

class MiniProfile extends Component {
  constructor() {
    super();
    this.showSettings = this.showSettings.bind(this);
  }
  showSettings() {
    this.props.showSet(true);
  }
  render() {
    return (
      <div className="profile">
        <Row className="mini-profile">
          <div className="menu-profile">
            <a href="/api/logout">
              <Icon className="logout" type="logout" theme="outlined" />
            </a>
            <a onClick={this.showSettings}>
              <Icon className="logout" type="setting" theme="outlined" />
            </a>
          </div>
          <Avatar size={80} icon="user" src={this.props.auth.info.image} />
          <h2>{this.props.auth.info.username}</h2>
        </Row>
        <Info />
        <LogForm />
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
)(MiniProfile);
