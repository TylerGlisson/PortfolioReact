import React, {Component} from "react";
import "./CSS/modal.css";

class ModalContent extends Component {
  render() {
    return (
      <div className="modalFade" id="navModal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div>
              <button type="button" className="close closeModal" data-dismiss="modal">&times;</button>
              <h4 className="modalHeader">Modal Header</h4>
            </div>
            <div className="modal-body">
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
      </div>
    );
  }
}

export default ModalContent;