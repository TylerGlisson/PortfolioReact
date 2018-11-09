import React, { Component } from 'react';
import Header from "./header";
import MainContent from "./mainContent";

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      value: 0
    }
  }
  render() {
    return (
     <div>
       <Header />
       <MainContent />
     </div> 
    );  
  }
}

export default App;
