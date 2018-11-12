import React, {Component} from "react";
import "./links.css";

class Links extends Component {
  render() {
    return (
     <div className="linksDiv">
       <ul className="mainNav">
         <li>
           <a href="#" className="navLinks">WHO</a>
         </li>
         <li>
           <a href="#" className="navLinks">WHAT</a>
         </li>
         <li>
           <a href="#" className="navLinks">WORK</a>
         </li>
       </ul>
     </div> 
    );
  }
}

export default Links;