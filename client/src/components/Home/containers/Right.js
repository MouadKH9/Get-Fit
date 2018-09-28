import React, { Component } from "react";
import { Row, Col } from "antd";
import Chart from "../components/Chart";
import Stats from "../components/Stats";

class Right extends Component {
  render() {
    return (
      <Row className="right">
        <Col md={{ span: 12 }} sm={{ span: 24 }} className="stats">
          <Stats />
        </Col>
        <Col md={{ span: 12 }} sm={{ span: 24 }} className="chart">
          <Chart />
        </Col>
      </Row>
    );
  }
}

export default Right;
