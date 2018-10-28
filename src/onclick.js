import React, {Component} from "react";
const ClickOutComponent = require('react-onclickout');

class ExampleComponent extends ClickOutComponent {

  onClickOut(e) {
    alert('user clicked outside of the component!');
  }

  render() {
    return (
      <div>Click outside of me!</div>
    );
  }
}

export default ExampleComponent;