import React, {Component} from "react";
import Brand from "./brand";
import "./CSS/header.css";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <nav className="navBar">
          <Brand />
          <Links />
          <Contact />
        </nav>
      </header>
    );
  }
}

export default Header;