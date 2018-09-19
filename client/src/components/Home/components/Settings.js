import React, { Component } from "react";
import { Avatar, Row, Icon, Form, Input } from "antd";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import axios from "axios";
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: this.props.auth.info.goal,
      goalError: this.props.auth.info.goal === undefined,
      rate: this.props.auth.info.rate,
      rateError: this.props.auth.info.rate === undefined,
      loading: false
    };
    this.handleOk = this.handleOk.bind(this);
    this.goBack = this.goBack.bind(this);
    this.rateChanged = this.rateChanged.bind(this);
    this.goalChanged = this.goalChanged.bind(this);
  }
  getAttention() {
    if (this.props.settings && this.props.settings.attention)
      return <h3>One last step to finish off your profile!</h3>;
  }
  checkInput(value) {
    return isNaN(value) || value === "";
  }
  goBack() {
    this.props.showSet();
  }
  goalChanged(e) {
    this.setState({
      goalError: this.checkInput(e.target.value),
      goal: e.target.value
    });
  }
  rateChanged(e) {
    this.setState({
      rateError: this.checkInput(e.target.value),
      rate: e.target.value
    });
  }
  async handleOk() {
    let res = await axios(
      "/api/init?goal=" + this.state.goal + "&rate=" + this.state.rate
    );
    console.log(res);
    if (res.data.ok) {
      this.props.showSet(false);
      this.props.fetchUser();
      this.props.fetchStats(this.props.auth.data);
    }
  }

  render() {
    return (
      <div className="profile settings">
        <Row className="mini-settings">
          <div className="menu-profile">
            <a onClick={this.goBack}>
              <Icon className="logout" type="left-circle" theme="outlined" />
            </a>
          </div>
          <Avatar size={80} icon="setting" />
          <h2>Settings</h2>
        </Row>
        <Row className="mini-info">
          <Form>
            <Form.Item style={{ paddingLeft: 10, paddingRight: 10 }}>
              {this.getAttention()}
              <h3>Your Goal:</h3>
              <Input
                placeholder="Goal"
                addonAfter="kg"
                value={this.state.goal}
                onChange={this.goalChanged}
              />
              <h3>Desired Rate:</h3>
              <Input
                placeholder="Desired Rate"
                addonAfter="kg/week"
                value={this.state.rate}
                onChange={this.rateChanged}
              />
            </Form.Item>
            <button
              className="submit"
              type="primary"
              disabled={
                this.state.goalError ||
                this.state.rateError ||
                this.state.currentError
              }
              onClick={this.handleOk}
            >
              Save
            </button>
          </Form>
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ settings, auth }) {
  return { settings, auth };
}

export default connect(
  mapStateToProps,
  actions
)(Settings);
