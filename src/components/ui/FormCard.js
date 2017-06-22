import React from 'react';
import './FormCard.css';

const FormCard = props =>
  <div className="FormCard">
    <h2 className="FormTitle">{props.title}</h2>
    {props.children}
  </div>;

export default FormCard;
