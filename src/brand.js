import React, {Component} from "react";
import "./CSS/brand.css";
import logo from "./imgs/tgnew2.png"

class Brand extends Component {
  render() {
    return (
      <div className="brandDiv">
        <a className="logo" href="#">
          <img src={logo} width="97" height="97" alt="TG logo"></img> 
        </a>
      </div>
    );
  }
}

export default Brand;