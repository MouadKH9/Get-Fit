import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import ReactChartkick, { LineChart } from "react-chartkick";
import { Chart as chart } from "chart.js";

ReactChartkick.addAdapter(chart);

class Chart extends Component {
  componentDidMount() {
    this.props.fetchUpdate();
  }
  getClosestMin() {
    let list = this.props.list;
    list = Object.values(list);
    let min = Math.floor(Math.min(...list));
    return min - (min % 5);
  }
  getClosestMax() {
    let list = this.props.list;
    list = Object.values(list);
    let max = Math.ceil(Math.max(...list));
    return max + 5 - (max % 5);
  }
  render() {
    return (
      <LineChart
        data={this.props.list}
        min={this.getClosestMin()}
        max={this.getClosestMax()}
        messages={{ empty: "No data" }}
        download="weight-chart"
      />
    );
  }
}
function mapStateToProps({ list }) {
  return { list };
}

export default connect(
  mapStateToProps,
  actions
)(Chart);
