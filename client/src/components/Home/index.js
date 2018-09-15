import React, { Component } from "react";
import { Row, Col } from "antd";
import Header from "../Header";
import Footer from "../Footer";
import WelcomeModal from "../Welcome";
import Left from "./containers/Left";
import Right from "./containers/Right";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showModal: window.location.href.includes("settings")
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Row>
          <Col md={{ span: 5, offset: 1 }}>
            <Left />
          </Col>
          <Col md={{ span: 16, offset: 1 }}>
            <Right />
          </Col>
        </Row>
        <Footer />
        <WelcomeModal show={this.state.showModal} />
      </div>
    );
  }
}
export default Home;
