import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h2>Get Fit!</h2>
        </Link>
      </div>
    );
  }
}
export default Header;
