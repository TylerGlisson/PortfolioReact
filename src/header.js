import React, {Component} from "react";
import Brand from "./brand";
import Contact from "./contact";
import Hamburger from "./hamburger";
import Links from "./links";
import "./CSS/header.css";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <nav className="navBar">
          <Brand />
          <Hamburger />
          <Links />
          <Contact />
        </nav>
      </header>
    );
  }
}

export default Header;