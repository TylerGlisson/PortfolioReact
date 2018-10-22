import React, {Component} from "react";
import "./CSS/hamburger.css";

class Hamburger extends Component {
  render() {
    return (
      <div className="hamburger">
        <button className="navBarToggle" type="button" data-toggle="modal" data-target="#navModal" aria-controls="navBarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navBarToggleIcon">
          </span>
        </button>
      </div>
    );
  }
}

export default Hamburger;