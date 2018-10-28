import React, {Component} from "react";
import "./CSS/modal.css";
const ClickOutComponent = require('react-onclickout');

class Modal extends ClickOutComponent {
  onClickOut(e) {
    alert('user clicked outside of the component!');
  }
  render() {
    
    return (
        <div className="modal" id="navModal" role="dialog">
          {/*  Modal content */}
          <div className="modalContent">
            <div className="closeDiv">
              <button type="button" className="closeModal" onClick={this.props.unShow}><i className="fas fa-times fa-2x"></i></button>
            </div>
            <div className="modalBody">
              <ul className="modalUl">
                <li className="modalLi">
                  <a className="modalLinks" href="#">WHO</a>
                </li>
                <li className="modalLi">
                  <a className="modalLinks" href="#">WHAT</a>
                </li>
                <li className="modalLi">
                  <a className="modalLinks" href="#">WORK</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    
    );
  }
}


export default Modal;