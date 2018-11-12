import React, { Component } from 'react';
import './prompter.css';

class Prompter extends Component {
 render() {
    return (
      <div className='prompterDiv'>
        <span>Would you like to be an X or O?</span>
        <a href="#" onClick={this.props.teamX}>X</a>
        <a href="#" onClick={this.props.teamO}>O</a>
      </div>
    );  
  }
}

export default Prompter;