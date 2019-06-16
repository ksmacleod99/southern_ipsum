import React from 'react';

const Input = (props) =>{
  return(
    <input
      className="input"
      id="number"
      type="number"
      value={props.value}
      onChange={props.handleChange}
      />
  )
}

export default Input;