import React, {Component} from "react";
import Brand from "./brand";
import Contact from "./contact";
import Hamburger from "./hamburger";
import Links from "./links";
import Graphics from "./graphics";
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
        <Graphics />
      </header>
    );
  }
}

export default Header;