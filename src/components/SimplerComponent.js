// Code SimplerComponent Here
import React from 'react';


const SimplerComponent = props => {
  const handleClick = () => {
    console.log("this is an action")
  }
  return(
    <div onClick={handleClick}>I am just happy</div>
  )
}


export default SimplerComponent;
