import React, { Component } from "react";
import { Card, Tooltip } from "antd";
import { connect } from "react-redux";

const gridStyle = {
  width: "50%",
  textAlign: "center"
};

class Stats extends Component {
  render() {
    return (
      <Card title="Your Stats">
        <Card.Grid style={gridStyle}>
          <Tooltip title="Average weight of this week (Mon-Sun)">
            <span>This week's average: </span>
          </Tooltip>
          {this.props.stats.average}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Tooltip title="This week's average - Last week's Average">
            <span>7 days difference: </span>
          </Tooltip>
          {this.props.stats.diff}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Tooltip title="Total weight lost since the start">
            <span>Total weight lost: </span>
          </Tooltip>
          {this.props.stats.total}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Tooltip title="How much you lose per week on average">
            <span>Average per week lost: </span>
          </Tooltip>
          {this.props.stats.averageWeek}
        </Card.Grid>
        <Card.Grid style={{ width: "100%", textAlign: "center" }}>
          <Tooltip title="Weeks until you reach your goal per this rate">
            <span>Weeks to reach goal:</span>
          </Tooltip>
          {this.props.stats.timeLeft}
        </Card.Grid>
      </Card>
    );
  }
}

function mapStateToProps({ stats }) {
  return { stats };
}

export default connect(
  mapStateToProps,
  null
)(Stats);
