// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }
  changeState = () => {
    this.setState({
      mood:"sad"
    })
  }

  render() {
    return (
      <div
      onClick={this.changeState}
      >{this.state.mood}</div>
    );
  }

}

export default SimpleComponent;
