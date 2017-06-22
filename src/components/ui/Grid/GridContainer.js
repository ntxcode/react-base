import React from 'react';
import './GridContainer.css';

const GridContainer = props =>
  <div className="gridContainer">
    {props.children}
  </div>;

export default GridContainer;
