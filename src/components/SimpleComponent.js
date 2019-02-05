// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  state = {
    mood: 'happy'
  }

  handleClick = () => {
    let newMood = ''
    if (this.state.mood === 'happy'){
      newMood = 'sad'
    } else {
      newMood = 'happy'
    }
    this.setState({
      mood: newMood
    })
  }

  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  } // end of render()
} // end of SimpleComponent class

export default SimpleComponent;
