import React, { Component } from "react";
import { Progress, Row, Col } from "antd";
import { connect } from "react-redux";

class Info extends Component {
  render() {
    return (
      <Row className="mini-info">
        <Col span={22} offset={1}>
          Your Progress:{" "}
          <Progress strokeWidth={12} percent={this.props.stats.progress} />
        </Col>
        <Col span={20} offset={2}>
          Your Goal: <h3>{this.props.auth.info.goal} kg</h3>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ auth, stats }) {
  return { auth, stats };
}

export default connect(
  mapStateToProps,
  null
)(Info);
