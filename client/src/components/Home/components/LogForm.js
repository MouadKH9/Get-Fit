import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { getLastValue } from "../../../helpers/data.js";
import { Row, Form, Input } from "antd";

class LogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: getLastValue(this.props.auth.data),
      valueError: false
    };
    this.checkInput = this.checkInput.bind(this);
    this.addLog = this.addLog.bind(this);
  }
  addLog(e) {
    e.preventDefault();
    this.props.addLog(this.state.value);
  }
  checkInput(e) {
    let value = e.target.value;
    this.setState({ valueError: isNaN(value) || value === "", value });
  }
  render() {
    return (
      <Row className="mini-info log">
        <Form onSubmit={this.addLog}>
          <Form.Item style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Input
              defaultValue={this.state.value}
              placeholder="Weight"
              addonAfter="kg"
              onChange={this.checkInput}
            />
          </Form.Item>
          <button
            className="submit"
            type="primary"
            htmlType="submit"
            disabled={this.state.valueError}
          >
            Log
          </button>
        </Form>
      </Row>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(LogForm);
