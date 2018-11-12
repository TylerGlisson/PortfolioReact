import React, { Component } from 'react';
import './gridBuilder.css';

class GridBuilder extends Component {
  makeBox = () => {
    // return '<div classname=\'gridItem\'></div>';
    let gridItems = []

    for (let i = 0; i < 9; i++) {
      gridItems.push(<div className='gridItem'><a href="#">?</a></div>);
    }
    return gridItems
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

export default GridBuilder;