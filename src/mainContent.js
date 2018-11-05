import React, { Component } from 'react';
import './CSS/mainContent.css';

class MainContent extends Component {
  makeBox = () => {
    return '<div classname=\'gridItem\'></div>';
  }
  render() {
    return (
      <div className='mainContentDiv'>
        <div className='gridContainer'>
          {this.makeBox()}
        </div> 
      </div> 
    );  
  }
}

export default MainContent;
