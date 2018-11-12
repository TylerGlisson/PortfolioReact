import React, {Component} from "react";
import "./hamburger.css";

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ''
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  
  showModal = () => {
    this.setState({className: 'modalVisible'});
  }
  hideModal = () => {
    this.setState({className: ''});
  }
 
  render() {
    let visibility = 'modalInitial ' + this.state.className;
    return (
      <div id="hamburgerDiv" className="hamburgerDiv">
        <button id="hamburgerBtn" type="button" onClick={this.showModal}>
          <span className="navbarToggler">
            <i className="fas fa-bars fa-2x"></i>
          </span>
        </button>

          {/*  Begin Modal  */}
          <div className={visibility} id="navModal" role="dialog">
            <div className="modalContent" id="modalContent">
              <div className="closeDiv">
                <button type="button" className="closeModalButton" onClick={this.hideModal}>
                  <i className="fas fa-times fa-2x"></i>
                </button>
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
        
      </div>
    );
  }
}


export default Hamburger;