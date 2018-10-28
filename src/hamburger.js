import React, {Component} from "react";
import ReactTransitionGroup from 'react-addons-transition-group';
import TransitionGroup from 'react-addons-transition-group'; 
import Modal from "./modal";
import "./CSS/hamburger.css";

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  modalOpacity = document.getElementsByClassName("modalContent").style;
  
  showModal = () => {
     
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false});
   
  };
  
  ProgressBar = ({ progress }) => ( 
      <div className="progress" style={{ width: `${progress}%`}}>
      </div>
  )
 
  render() {
    return (
      <div className="hamburger">
        <button id="hamburgerBtn" type="button" onClick={this.showModal}>
          <span className="navbarToggler">
            <i className="fas fa-bars fa-2x"></i>
          </span>
        </button>
        
        {(this.state.show === true)? 
           <Modal unShow={this.hideModal}/>:<div/> 
        }
       
      </div>
    );
  }
}


export default Hamburger;