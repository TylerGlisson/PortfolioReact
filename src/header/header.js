import React, {Component} from "react";
import Brand from "./brand/brand";
import Contact from "./contact/contact";
import Hamburger from "./hamburger/hamburger";
import Links from "./links/links";
import Graphics from "./graphics/graphics";
import "./header.css";

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