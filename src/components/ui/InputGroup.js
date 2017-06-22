import React from 'react';
import { Field } from 'redux-form';
import './InputGroup.css';

const InputGroup = props =>
  <div className="InputGroup">
    {props.icon}
    <Field
      className="FormInput"
      name={props.name}
      component="input"
      type={props.type}
      placeholder={props.placeholder}
    />
    <label htmlFor={props.name} className="FormLabel">{props.label}</label>
  </div>;

export default InputGroup;
