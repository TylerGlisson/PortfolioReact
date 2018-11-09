import React, { Component } from 'react';
import Prompter from './prompter';
import GridBuilder from './gridBuilder';
import './CSS/mainContent.css';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: ''
    }
    
  }
  changeTeamX = () => {
    this.setState({team: 'x'}); 
  }
  changeTeamO = () => {
    this.setState({team: 'o'});
  }
  showPrompter = () => {
    if (this.state.team === '') {
      return <Prompter teamX={this.changeTeamX} teamO={this.changeTeamO}/>;
    }
    else {
      return <GridBuilder />;
    }
  }
  render() {
    return (
      <div>
        {this.showPrompter()}
      </div>
    );  
  }
}

export default MainContent;