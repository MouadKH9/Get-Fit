import React, { Component } from "react";
import { Avatar, Row } from "antd";
import Info from "./Info";
import LogForm from "./LogForm";
import { connect } from "react-redux";

class MiniProfile extends Component {
  render() {
    return (
      <div className="profile">
        <Row className="mini-profile">
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
