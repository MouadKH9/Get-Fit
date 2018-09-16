import React, { Component } from "react";
import { Avatar, Row, Icon } from "antd";
import Info from "./Info";
import LogForm from "./LogForm";
import { connect } from "react-redux";

class MiniProfile extends Component {
  render() {
    return (
      <div className="profile">
        <Row className="mini-profile">
          <div className="menu-profile">
            <a href="/api/logout">
              <Icon className="logout" type="logout" theme="outlined" />
            </a>
            <a href="#settings" onClick={this.props.showModal}>
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
  null
)(MiniProfile);
