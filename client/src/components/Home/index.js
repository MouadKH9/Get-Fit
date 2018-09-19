import React, { Component } from "react";
import { Row, Col } from "antd";
import Header from "../Header";
import Footer from "../Footer";
import Left from "./containers/Left";
import Right from "./containers/Right";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Home extends Component {
  componentWillMount() {
    if (window.location.href.includes("new"))
      this.props.showSettings(true, true);
  }
  getAttention() {
    if (this.props.settings && this.props.settings.attention) {
      document.getElementsByClassName("right")[0].style.zIndex = -1;
      return <div className="attention" />;
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Row>
          <Col md={{ span: 5, offset: 1 }}>
            <Left showModal={this.showModal} />
          </Col>
          <Col md={{ span: 16, offset: 1 }}>
            <Right />
          </Col>
        </Row>
        <Footer />
        {this.getAttention()}
      </div>
    );
  }
}
function mapStateToProps({ settings }) {
  return { settings };
}
export default connect(
  mapStateToProps,
  actions
)(Home);
