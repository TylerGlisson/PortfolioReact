import React, { Component } from 'react';
import './graphics.css';
import graphics from '../../imgs/kariartOutline.png';

class Graphics extends Component {
  render() {
    return (
      <div className='graphicsDiv'>
        <img className='watercolor' src={graphics} alt="watercolor graphics"></img>

      </div> 
    );  
  }
}

export default Graphics;
