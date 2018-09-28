import React, { Component } from "react";
import { Modal, Form, Input, Button } from "antd";
import { connect } from "react-redux";
import axios from "axios";

class WelcomeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      currentError: true,
      goal: "",
      goalError: true,
      rate: "",
      rateError: true,
      loading: false,
      showMe: false
    };
    this.handleOk = this.handleOk.bind(this);
    this.rateChanged = this.rateChanged.bind(this);
    this.goalChanged = this.goalChanged.bind(this);
    this.currentChanged = this.currentChanged.bind(this);
  }
  checkInput(value) {
    return isNaN(value) || value === "";
  }
  goalChanged(e) {
    this.setState({
      goalError: this.checkInput(e.target.value),
      goal: e.target.value
    });
  }
  currentChanged(e) {
    this.setState({
      currentError: this.checkInput(e.target.value),
      current: e.target.value
    });
  }
  rateChanged(e) {
    this.setState({
      rateError: this.checkInput(e.target.value),
      rate: e.target.value
    });
  }
  async handleOk() {
    this.setState({ loading: true });
    let res = await axios(
      "/api/init?current=" +
        this.state.current +
        "&goal=" +
        this.state.goal +
        "&rate=" +
        this.state.rate
    );
    if (res.data.ok) {
      this.setState({ showMe: false });
      window.location.href = "/";
    }
  }

  render() {
    return (
      <Modal
        centered
        visible={this.state.showMe || this.props.modal}
        footer={
          <Button
            disabled={
              this.state.goalError ||
              this.state.rateError ||
              this.state.currentError
            }
            key="submit"
            type="primary"
            loading={this.state.loading}
            onClick={this.handleOk}
          >
            Submit
          </Button>
        }
      >
        <h3>Just one step to complete your profile!</h3>
        <Form>
          <Form.Item style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Input
              placeholder="Current Weight"
              addonAfter="kg"
              value={this.state.current}
              onChange={this.currentChanged}
            />
            <Input
              placeholder="Goal"
              addonAfter="kg"
              value={this.state.goal}
              onChange={this.goalChanged}
            />
            <Input
              placeholder="Desired Rate"
              addonAfter="kg/week"
              value={this.state.rate}
              onChange={this.rateChanged}
            />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
function mapStateToProps({ modal }) {
  return { modal };
}
export default connect(
  null,
  mapStateToProps
)(WelcomeModal);
