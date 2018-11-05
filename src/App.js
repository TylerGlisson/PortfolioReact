import React, { Component } from 'react';
import Header from "./header";
import Graphics from "./graphics";
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
       <MainContent value={this.state.value}/>
     </div> 
    );  
  }
}

export default App;
