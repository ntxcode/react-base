import React from 'react';
import './Button.css';

const Button = props =>
  <button className={`Button ${props.type ? props.type : ''}`} type="submit">
    {props.children}
  </button>;

export default Button;
